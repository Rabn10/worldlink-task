<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'content',
        'user_id',
        'parent_id',
        'depth',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function replies() {
        return $this->hasMany(Comment::class, 'parent_id')->where('depth', '<=', 3);
    }

    public function parent() {
        return $this->belongsTo(Comment::class, 'parent_id');
    }
}
