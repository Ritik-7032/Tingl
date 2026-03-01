// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
// import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
// import { Link } from "react-router";

// function LoginPage() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const { login, isLoggingIn } = useAuthStore();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(formData);
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
//                   <h2 className="text-2xl font-bold text-slate-200 mb-2">Welcome Back</h2>
//                   <p className="text-slate-400">Login to access to your account</p>
//                 </div>

//                 {/* FORM */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
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

                  
//                   <button className="auth-btn" type="submit" disabled={isLoggingIn}>
//                     {isLoggingIn ? (
//                       <LoaderIcon className="w-full h-5 animate-spin text-center" />
//                     ) : (
//                       "Sign In"
//                     )}
//                   </button>
//                 </form>

//                 <div className="mt-6 text-center">
//                   <Link to="/signup" className="auth-link">
//                     Don't have an account? Sign Up
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
//               <div>
//                 <img
//                   src="/login.png"
//                   alt="People using mobile devices"
//                   className="w-full h-auto object-contain"
//                 />
//                 <div className="mt-6 text-center">
//           <h3 className="text-xl font-medium text-cyan-400">
//   Stay Close, No Matter the Distance
//    </h3>

//                   <div className="mt-4 flex justify-center gap-4">
//                   <span className="auth-badge">100% Free</span>
// <span className="auth-badge">Instant Setup</span>
// <span className="auth-badge">End-to-End Secure</span>
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
// export default LoginPage;
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white">

      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* LEFT FORM */}
        <div className="md:w-1/2 p-10 flex items-center justify-center border-r border-gray-200">
          <div className="w-full max-w-md">

            <div className="text-center mb-8">
              <MessageCircleIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Login to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

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
                disabled={isLoggingIn}
                className="w-full py-2 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
              >
                {isLoggingIn ? <LoaderIcon className="animate-spin mx-auto" /> : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/signup" className="text-sm text-yellow-600 hover:underline">
                Don't have an account? Sign Up
              </Link>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8">
          <div className="text-center">
            <img src="/login.png" alt="Login Illustration" className="w-full max-w-sm mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mt-6">
              Stay Close, No Matter the Distance
            </h3>
            <div className="mt-4 flex justify-center gap-3">
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">100% Free</span>
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Instant Setup</span>
              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">Secure</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;