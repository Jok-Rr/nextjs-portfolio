/* This example requires Tailwind CSS v2.0+ */
import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid";

export const Alert = ({ errors, type, message = null }) => {
  if (errors) {
    switch (type) {
      case "error":
        return (
          <div className={`rounded-xl bg-red-50 p-4 text-left mb-4`}>
            <div className="flex">
              <div className="flex-shrink-0">
                {" "}
                <ShieldExclamationIcon
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium text-red-800`}>
                  {errors.message}
                </h3>
              </div>
            </div>
          </div>
        );
      case "sucess":
        return (
          <div className={`rounded-xl bg-green-50 p-4 text-left mb-4`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <ShieldCheckIcon
                  className="h-5 w-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium text-green-800`}>
                  {message ? message : errors.message}
                </h3>
              </div>
            </div>
          </div>
        );
    }
  }
};
