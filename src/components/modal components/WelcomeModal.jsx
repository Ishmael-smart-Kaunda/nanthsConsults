import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
// import { X } from "lucide-react";
import { IoClose } from "react-icons/io5";
import logo from '../../assets/images/logo/nanth-logo.jpeg'

const STORAGE_KEY = "nanth-welcome-modal";
const EXPIRY_DAYS = 30;

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem(STORAGE_KEY);

    if (lastSeen) {
      const diff = Date.now() - Number(lastSeen);
      const days = diff / (1000 * 60 * 60 * 24);

      if (days < EXPIRY_DAYS) return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setOpen(false);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={closeModal}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: .95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: .95 }}
              transition={{
                duration: .35,
                ease: "easeOut"
              }}
              className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              >
                <IoClose size={20} />
              </button>

              {/* Logo */}

              <img
                src={logo}
                alt="Nanth Consults"
                className="mx-auto mb-6 h-16"
              />

              <h2 className="text-center text-3xl font-bold text-gray-900">
                Welcome to Nanth Consults
              </h2>

              <p className="mt-5 text-center leading-7 text-gray-600">
                Thank you for visiting us.
              </p>

              <p className="mt-4 text-center leading-7 text-gray-600">
                We partner with organizations to strengthen their people,
                systems, and operations through professional HR,
                Administration, Recruitment, and Organizational Development
                services.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/services"
                  className="rounded-xl bg-primary px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
                >
                  Explore Our Services
                </a>

                <a
                  href="/contact"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default WelcomeModal;