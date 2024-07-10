import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import StudentList from './components/student/StudentList';
import StudentDetails from './components/student/StudentDetails';
import StudentForm from './components/student/StudentForm';
import CourseList from './components/course/CourseList';
import CourseDetails from './components/course/CourseDetails';
import CourseForm from './components/course/CourseForm';

const navigation = [
  { name: 'Students', href: '/students', current: true },
  { name: 'Courses', href: '/courses', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  const location = useLocation();
  let headerText = 'Students';

  if (location.pathname.startsWith('/courses')) {
    headerText = 'Courses';
  }

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{headerText}</h1>
      </div>
    </header>
  );
}

function App() {
  const currentUrl = window.location.pathname;

  navigation.forEach(item => {
    item.current = (item.href === currentUrl);
  });

  return (
    <Router>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="WAA React"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          </DisclosurePanel>
        </Disclosure>

        <Header />

        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/students/:studentId" element={<StudentDetails />} />
              <Route path="/students/edit/:studentId" element={<StudentForm />} />
              <Route path="/students/add-student" element={<StudentForm />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:courseId" element={<CourseDetails />} />
              <Route path="/courses/edit/:courseId" element={<CourseForm />} />
              <Route path="/courses/add-course" element={<CourseForm />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;