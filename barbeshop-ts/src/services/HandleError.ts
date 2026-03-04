import axios from "axios";
import { toast } from "react-toastify";
export const HandleError = (error: any) => {
      if(axios.isAxiosError(error)) {
          const response = error.response;  // respuesta del servidor

          if(Array.isArray(response?.data.error)) {
            for(const data of response.data.error) {
                  toast.warn(data.descripcion ); // envvuelto array
            }
          } else if(response?.data) {
              toast.warn(response.data);

          } else if (typeof response?.data.error === 'object') {
                  for(const data of response.data.error) {
                     toast.warn(response.data.error[data][0])
                  }
          } else if(response?.status === 401) {
                toast.warn('no authorizado!');
                window.history.pushState({}, "inicio", "login") // renderizo hacia login no autorizado
          }
}
}