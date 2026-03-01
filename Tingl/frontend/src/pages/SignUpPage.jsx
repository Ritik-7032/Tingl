// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
// import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from "lucide-react";
// import { Link } from "react-router";

// function SignUpPage() {
//   const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
//   const { signup, isSigningUp } = useAuthStore();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signup(formData);
//   };

//   return (
//     <div className="w-full flex items-center justify-center p-4 bg-slate-900">
//       <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
//         <BorderAnimatedContainer>
//           <div className="w-full flex flex-col md:flex-row">
//             {/* FORM CLOUMN - LEFT SIDE */}
//             <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
//               <div className="w-full max-w-md">
//                 {/* HEADING TEXT */}
//                 <div className="text-center mb-8">
//                   <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
//                   <h2 className="text-2xl font-bold text-slate-200 mb-2">Create Account</h2>
//                   <p className="text-slate-400">Sign up for a new account</p>
//                 </div>

//                 {/* FORM */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* FULL NAME */}
//                   <div>
//                     <label className="auth-input-label">Full Name</label>
//                     <div className="relative">
//                       <UserIcon className="auth-input-icon" />

//                       <input
//                         type="text"
//                         value={formData.fullName}
//                         onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                         className="input"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                   </div>

//                   {/* EMAIL INPUT */}
//                   <div>
//                     <label className="auth-input-label">Email</label>
//                     <div className="relative">
//                       <MailIcon className="auth-input-icon" />

//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         className="input"
//                         placeholder="johndoe@gmail.com"
//                       />
//                     </div>
//                   </div>

//                   {/* PASSWORD INPUT */}
//                   <div>
//                     <label className="auth-input-label">Password</label>
//                     <div className="relative">
//                       <LockIcon className="auth-input-icon" />

//                       <input
//                         type="password"
//                         value={formData.password}
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                         className="input"
//                         placeholder="Enter your password"
//                       />
//                     </div>
//                   </div>

//                   {/* SUBMIT BUTTON */}
//                   <button className="auth-btn" type="submit" disabled={isSigningUp}>
//                     {isSigningUp ? (
//                       <LoaderIcon className="w-full h-5 animate-spin text-center" />
//                     ) : (
//                       "Create Account"
//                     )}
//                   </button>
//                 </form>

//                 <div className="mt-6 text-center">
//                   <Link to="/login" className="auth-link">
//                     Already have an account? Login
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* FORM ILLUSTRATION - RIGHT SIDE */}
//             <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
//               <div>
//                 <img
//                   src="/signup.png"
//                   alt="People using mobile devices"
//                   className="w-full h-auto object-contain"
//                 />
//                 <div className="mt-6 text-center">
//                   <h3 className="text-xl font-medium text-cyan-400">Start Your Journey Today</h3>

//                   <div className="mt-4 flex justify-center gap-4">
//                     <span className="auth-badge">Free</span>
//                     <span className="auth-badge">Easy Setup</span>
//                     <span className="auth-badge">Private</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </BorderAnimatedContainer>
//       </div>
//     </div>
//   );
// }
// export default SignUpPage;
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from "lucide-react";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white">

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        <div className="md:w-1/2 p-10 flex items-center justify-center border-r border-gray-200">
          <div className="w-full max-w-md">

            <div className="text-center mb-8">
              <MessageCircleIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">Sign up for a new account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSigningUp}
                className="w-full py-2 font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition"
              >
                {isSigningUp ? <LoaderIcon className="animate-spin mx-auto" /> : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm text-yellow-600 hover:underline">
                Already have an account? Login
              </Link>
            </div>

          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8">
          <div className="text-center">
            <img src="/signup.png" alt="Signup Illustration" className="w-full max-w-sm mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              Start Your Journey Today
            </h3>
            <div className="mt-4 flex justify-center gap-3">
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Free</span>
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Easy Setup</span>
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Private</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUpPage;