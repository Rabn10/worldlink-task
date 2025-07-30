import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
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
                            <p>Throughout its history, AI has faced periods of hype and skepticism. To understand what’s going on with AI today, it’s helpful to think of it in phases of development. Early Artificial Intelligence web systems were machines that received input learnings, the data in them were fed by humans and then produced a recommendation. Those responses were based on the way the systems were trained, and the algorithms used to tell the system what to do with the data. In easier terms, Netflix knowing that you loved “Squid Game” and suggesting that you watch “Escape Room”.

                                As technology progressed, the previous standards that once defined AI tools and apps became outdated. Thus, AI is continuously evolving to benefit industries and software development businesses.</p>
                        </div>

                        <div className="p-6 border-t">
                            <h2 className="text-lg font-semibold mb-2">Comments</h2>
                            <form className="flex items-start space-x-2">
                                <textarea
                                    className="flex-grow border rounded-md p-2 resize-none"
                                    rows="2"
                                    placeholder="Write your comment..."
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Comment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
