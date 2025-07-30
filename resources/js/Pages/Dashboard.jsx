import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ comments = [] }) {
    const { data, setData, post, reset } = useForm({
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/comments', {
            onSuccess: () => {
                reset(); // clears textarea
            }
        });
    };

    // Recursive comment component
    const CommentItem = ({ comment, level = 0 }) => (
        <div
            style={{ marginLeft: level * 20 + 'px' }}
            className="border-l-2 border-gray-200 pl-4 mt-2"
        >
            <p className="text-sm text-gray-800">
                <strong>{comment.user?.name || 'Anonymous'}:</strong> {comment.content}
            </p>
            {comment.replies?.length > 0 &&
                comment.replies.map(reply => (
                    <CommentItem key={reply.id} comment={reply} level={level + 1} />
                ))
            }
        </div>
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>What is Artificial Intelligence?</h1>
                            <p>
                                Throughout its history, AI has faced periods of hype and skepticism.
                                To understand what’s going on with AI today, it’s helpful to think of it in phases of development.
                                Early Artificial Intelligence web systems were machines that received input learnings, the data in them were fed by humans and then produced a recommendation.
                                Those responses were based on the way the systems were trained, and the algorithms used to tell the system what to do with the data.
                                In easier terms, Netflix knowing that you loved “Squid Game” and suggesting that you watch “Escape Room”.
                                As technology progressed, the previous standards that once defined AI tools and apps became outdated.
                                Thus, AI is continuously evolving to benefit industries and software development businesses.
                            </p>
                        </div>

                        {/* Comment Form */}
                        <div className="p-6 border-t">
                            <h2 className="text-lg font-semibold mb-2">Comments</h2>
                            <form onSubmit={submit} className="flex items-start space-x-2">
                                <textarea
                                    className="flex-grow border rounded-md p-2 resize-none"
                                    rows="2"
                                    placeholder="Write your comment..."
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Comment
                                </button>
                            </form>

                            {/* Display Comments */}
                            <div className="mt-6">
                                {comments.length === 0 ? (
                                    <p className="text-gray-500">No comments yet.</p>
                                ) : (
                                    comments.map(comment => (
                                        <CommentItem key={comment.id} comment={comment} />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
