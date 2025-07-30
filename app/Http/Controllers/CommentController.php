<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
class CommentController extends Controller
{
    public function store(Request $request) {
        $request->validate([
            'content' => 'required|string',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $depth = 0;

        if ($request->parent_id) {
            $parent = Comment::find($request->parent_id);
            $depth = $parent->depth + 1;
            if ($depth > 3) {
                return response()->json(['error' => 'Maximum 3 levels of replies allowed.'], 422);
            }
        }

        $comment = Comment::create([
            'content' => $request->content,
            'user_id' => auth()->id(),
            'parent_id' => $request->parent_id,
            'depth' => $depth,
        ]);

        return redirect()->back();
    }
}
