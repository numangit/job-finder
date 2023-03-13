import React from 'react';

const Home = () => {
    return (
        <body>
            <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
                <img src="./images/logo.svg" />
            </nav>
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <div class="sidebar">
                    <nav>
                        <ul class="space-y-4">
                            <li>
                                <a href="/jobs" class="main-menu menu-active lws-allJob">
                                    <i class="fa-solid fa-briefcase"></i>
                                    <span> All Available Jobs</span>
                                </a>
                                <ul class="space-y-6 lg:space-y-2 ">
                                    <li>
                                        <a class="sub-menu" href="/jobs/internship">
                                            <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                                            Internship
                                        </a>
                                    </li>
                                    <li>
                                        <a class="sub-menu" href="/jobs/fulltime">
                                            <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                                            Full Time
                                        </a>
                                    </li>
                                    <li>
                                        <a class="sub-menu" href="/jobs/remote">
                                            <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                                            Remote
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/jobs" class="main-menu lws-AddJob">
                                    <i class="fa-solid fa-file-circle-plus"></i>
                                    <span>Add NewJob</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="lg:pl-[14rem]  mt-[5.8125rem]">
                    <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                            <h1 class="section-title">All Available Jobs</h1>
                            <div class="flex gap-4">
                                <div class="search-field group flex-1">
                                    <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                                    <input type="text" placeholder="Search Job" class="search-input" id="lws-searchJob" />
                                </div>
                                <select id="lws-sort" name="sort" autocomplete="sort" class="flex-1">
                                    <option>Default</option>
                                    <option>Salary (Low to High)</option>
                                    <option>Salary (High to Low)</option>
                                </select>
                            </div>
                        </div>

                        <div class="jobs-list ">
                            {/* <!-- Single Job 1--> */}
                            <div class="job">
                                <div class="flex-1 min-w-0">
                                    <h2 class="lws-title">Back End Developer</h2>
                                    <div class="job-footers">
                                        <div class="lws-type">
                                            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
                                            <i class="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                                            Full-time
                                        </div>
                                        <div class="lws-salary">
                                            <i class="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                                            BDT 40,000
                                        </div>
                                        <div class="lws-deadline">
                                            <i class="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                                            Closing on January 9, 2020
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                    <span class="hidden sm:block">
                                        <button type="button" class="lws-edit btn btn-primary">
                                            <i class="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                                            Edit
                                        </button>
                                    </span>

                                    <span class="sm:ml-3">
                                        <button type="button" class="lws-delete btn btn-danger ">
                                            <i class="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                                            Delete
                                        </button>
                                    </span>
                                </div>
                            </div>
                            {/* <!-- Single Job 1--> */}
                        </div>
                    </main>
                </div>
            </div>
        </body>
    );
};

export default Home;