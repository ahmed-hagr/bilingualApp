import React from "react";

const Chart = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-purple-500 rounded-lg p-4 space-y-5  flex flex-col items-center w-100">
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19.5" r="19" fill="#A66FF0" />
            <g clipPath="url(#clip0_3962_504)">
              <path
                d="M12.4542 20.6784L20.251 9.88273C20.7668 9.16865 21.8934 9.63878 21.7486 10.5076L20.6666 16.9997H24.8701C25.55 16.9997 25.9437 17.7698 25.5457 18.3209L17.7488 29.1166C17.2331 29.8307 16.1065 29.3605 16.2513 28.4917L17.3333 21.9997H13.1297C12.4499 21.9997 12.0561 21.2295 12.4542 20.6784Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3962_504">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(9 9.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="  text-white font-semibold text-lg">Energy</div>

          <svg
            width="112"
            height="113"
            viewBox="0 0 112 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
              fill="#B37EFC"
            />
            <path
              d="M20.8528 92.6224C18.6959 94.8391 15.1259 94.9041 13.1356 92.5367C8.20951 86.6773 4.52379 79.8539 2.32819 72.4793C-0.40156 63.3105 -0.736942 53.5952 1.35402 44.26C3.44499 34.9248 7.89259 26.2809 14.2727 19.1526C19.4043 13.4191 25.6486 8.8199 32.6034 5.62168C35.4134 4.32953 38.6146 5.91118 39.6198 8.83608C40.625 11.761 39.0479 14.916 36.2711 16.2779C31.1128 18.8081 26.4731 22.315 22.6181 26.6221C17.5141 32.3247 13.956 39.2398 12.2832 46.708C10.6104 54.1762 10.8788 61.9484 13.0626 69.2834C14.7119 74.8233 17.4124 79.9744 20.9985 84.4632C22.929 86.8795 23.0096 90.4058 20.8528 92.6224Z"
              fill="white"
            />
            <path
              d="M39.312 60.5V57.38H31.032V54.932L38.904 43.7H42.384V54.716H44.592V57.38H42.384V60.5H39.312ZM34.32 54.716H39.504V47.084L34.32 54.716ZM53.031 60.788C51.799 60.788 50.735 60.572 49.839 60.14C48.959 59.708 48.263 59.116 47.751 58.364C47.255 57.596 46.967 56.732 46.887 55.772H49.887C50.031 56.46 50.383 57.036 50.943 57.5C51.503 57.948 52.199 58.172 53.031 58.172C53.927 58.172 54.655 57.844 55.215 57.188C55.791 56.532 56.079 55.716 56.079 54.74C56.079 53.732 55.791 52.932 55.215 52.34C54.655 51.748 53.943 51.452 53.079 51.452C52.359 51.452 51.735 51.628 51.207 51.98C50.679 52.332 50.303 52.772 50.079 53.3H47.127L48.567 43.7H57.879V46.388H50.871L50.103 50.276C50.455 49.892 50.935 49.58 51.543 49.34C52.151 49.084 52.831 48.956 53.583 48.956C54.783 48.956 55.783 49.228 56.583 49.772C57.383 50.3 57.991 51.004 58.407 51.884C58.823 52.748 59.031 53.692 59.031 54.716C59.031 55.884 58.775 56.924 58.263 57.836C57.767 58.748 57.063 59.468 56.151 59.996C55.255 60.524 54.215 60.788 53.031 60.788ZM65.3458 51.956C64.5778 51.956 63.8818 51.788 63.2578 51.452C62.6338 51.1 62.1378 50.604 61.7698 49.964C61.4018 49.324 61.2178 48.564 61.2178 47.684C61.2178 46.804 61.4018 46.044 61.7698 45.404C62.1378 44.764 62.6338 44.276 63.2578 43.94C63.8818 43.588 64.5858 43.412 65.3698 43.412C66.1378 43.412 66.8258 43.588 67.4338 43.94C68.0578 44.276 68.5538 44.764 68.9218 45.404C69.2898 46.044 69.4738 46.804 69.4738 47.684C69.4738 48.564 69.2898 49.324 68.9218 49.964C68.5538 50.604 68.0578 51.1 67.4338 51.452C66.8098 51.788 66.1138 51.956 65.3458 51.956ZM64.4338 60.5L73.9138 43.7H76.9138L67.4338 60.5H64.4338ZM65.3458 49.82C65.8098 49.82 66.2098 49.644 66.5458 49.292C66.8818 48.924 67.0498 48.388 67.0498 47.684C67.0498 46.98 66.8818 46.444 66.5458 46.076C66.2258 45.708 65.8258 45.524 65.3458 45.524C64.8658 45.524 64.4578 45.708 64.1218 46.076C63.8018 46.444 63.6418 46.98 63.6418 47.684C63.6418 48.388 63.8018 48.924 64.1218 49.292C64.4578 49.644 64.8658 49.82 65.3458 49.82ZM76.0978 60.788C75.3298 60.788 74.6338 60.62 74.0098 60.284C73.3858 59.932 72.8898 59.436 72.5218 58.796C72.1538 58.156 71.9698 57.396 71.9698 56.516C71.9698 55.636 72.1538 54.884 72.5218 54.26C72.8898 53.62 73.3858 53.132 74.0098 52.796C74.6338 52.444 75.3378 52.268 76.1218 52.268C76.8898 52.268 77.5778 52.444 78.1858 52.796C78.8098 53.132 79.3058 53.62 79.6738 54.26C80.0418 54.884 80.2258 55.636 80.2258 56.516C80.2258 57.396 80.0418 58.156 79.6738 58.796C79.3058 59.436 78.8098 59.932 78.1858 60.284C77.5778 60.62 76.8818 60.788 76.0978 60.788ZM76.0978 58.652C76.5778 58.652 76.9778 58.476 77.2978 58.124C77.6338 57.756 77.8018 57.22 77.8018 56.516C77.8018 55.812 77.6338 55.276 77.2978 54.908C76.9778 54.54 76.5778 54.356 76.0978 54.356C75.6178 54.356 75.2098 54.54 74.8738 54.908C74.5538 55.276 74.3938 55.812 74.3938 56.516C74.3938 57.22 74.5538 57.756 74.8738 58.124C75.2098 58.476 75.6178 58.652 76.0978 58.652Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="bg-white rounded-lg p-4 space-y-5  flex flex-col items-center w-100">
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19"
              cy="19.5"
              r="19"
              fill="#FF7E86"
              fillOpacity="0.1"
            />
            <path
              d="M19.4164 27.4215L22.5197 24.3182L21.2237 23.0054L19.6892 24.5399L19.6891 14.6503L21.2236 16.1848L22.5366 14.8719L19.4162 11.7686C19.0581 11.4105 18.4614 11.4105 18.1033 11.7686L15 14.8719L16.313 16.1848L17.8475 14.6503V24.5399L16.313 23.0054L15 24.3183L18.1033 27.4216C18.4784 27.7795 19.0581 27.7795 19.4162 27.4214L19.4164 27.4215Z"
              fill="#FF7E86"
            />
          </svg>

          <div className="  text-black font-semibold text-lg">Range</div>

          <svg
            width="112"
            height="113"
            viewBox="0 0 112 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
              fill="#F4F5F9"
            />
            <path
              d="M20.8528 92.6224C18.6959 94.8391 15.1258 94.9041 13.1356 92.5367C6.77094 84.9663 2.50222 75.8165 0.812389 66.0041C-1.19539 54.3454 0.5406 42.3504 5.77139 31.7394C11.0022 21.1284 19.459 12.4465 29.9291 6.93887C38.7411 2.30343 48.5981 0.116978 58.4788 0.554831C61.5685 0.691751 63.6912 3.56302 63.2465 6.62368C62.8018 9.68434 59.9558 11.7679 56.8635 11.7083C49.3357 11.5631 41.86 13.3178 35.1432 16.8511C26.7672 21.2572 20.0017 28.2027 15.8171 36.6915C11.6325 45.1804 10.2437 54.7764 11.8499 64.1033C13.1379 71.5825 16.2989 78.5806 20.9985 84.4631C22.9289 86.8795 23.0096 90.4058 20.8528 92.6224Z"
              fill="#FF7E86"
            />
            <path
              d="M24.456 60.5V47.204L21.696 47.852V45.5L25.752 43.7H27.648V60.5H24.456ZM36.9294 60.788C35.6974 60.788 34.6334 60.572 33.7374 60.14C32.8574 59.708 32.1614 59.116 31.6494 58.364C31.1534 57.596 30.8654 56.732 30.7854 55.772H33.7854C33.9294 56.46 34.2814 57.036 34.8414 57.5C35.4014 57.948 36.0974 58.172 36.9294 58.172C37.8254 58.172 38.5534 57.844 39.1134 57.188C39.6894 56.532 39.9774 55.716 39.9774 54.74C39.9774 53.732 39.6894 52.932 39.1134 52.34C38.5534 51.748 37.8414 51.452 36.9774 51.452C36.2574 51.452 35.6334 51.628 35.1054 51.98C34.5774 52.332 34.2014 52.772 33.9774 53.3H31.0254L32.4654 43.7H41.7774V46.388H34.7694L34.0014 50.276C34.3534 49.892 34.8334 49.58 35.4414 49.34C36.0494 49.084 36.7294 48.956 37.4814 48.956C38.6814 48.956 39.6814 49.228 40.4814 49.772C41.2814 50.3 41.8894 51.004 42.3054 51.884C42.7214 52.748 42.9294 53.692 42.9294 54.716C42.9294 55.884 42.6734 56.924 42.1614 57.836C41.6654 58.748 40.9614 59.468 40.0494 59.996C39.1534 60.524 38.1134 60.788 36.9294 60.788ZM46.5373 60.5L52.8733 46.316H44.5933V43.7H56.0413V45.884L49.7293 60.5H46.5373ZM58.3256 60.5V43.22H61.3976V53.42L65.6216 48.596H69.2696L64.3976 54.02L70.0616 60.5H66.2216L61.3976 54.524V60.5H58.3256ZM75.4943 51.956C74.7263 51.956 74.0303 51.788 73.4062 51.452C72.7823 51.1 72.2863 50.604 71.9183 49.964C71.5503 49.324 71.3663 48.564 71.3663 47.684C71.3663 46.804 71.5503 46.044 71.9183 45.404C72.2863 44.764 72.7823 44.276 73.4062 43.94C74.0303 43.588 74.7343 43.412 75.5183 43.412C76.2863 43.412 76.9743 43.588 77.5823 43.94C78.2063 44.276 78.7023 44.764 79.0703 45.404C79.4383 46.044 79.6223 46.804 79.6223 47.684C79.6223 48.564 79.4383 49.324 79.0703 49.964C78.7023 50.604 78.2063 51.1 77.5823 51.452C76.9583 51.788 76.2623 51.956 75.4943 51.956ZM74.5823 60.5L84.0623 43.7H87.0623L77.5823 60.5H74.5823ZM75.4943 49.82C75.9583 49.82 76.3583 49.644 76.6943 49.292C77.0303 48.924 77.1983 48.388 77.1983 47.684C77.1983 46.98 77.0303 46.444 76.6943 46.076C76.3743 45.708 75.9743 45.524 75.4943 45.524C75.0143 45.524 74.6063 45.708 74.2703 46.076C73.9503 46.444 73.7903 46.98 73.7903 47.684C73.7903 48.388 73.9503 48.924 74.2703 49.292C74.6063 49.644 75.0143 49.82 75.4943 49.82ZM86.2463 60.788C85.4783 60.788 84.7823 60.62 84.1583 60.284C83.5343 59.932 83.0383 59.436 82.6703 58.796C82.3023 58.156 82.1183 57.396 82.1183 56.516C82.1183 55.636 82.3023 54.884 82.6703 54.26C83.0383 53.62 83.5343 53.132 84.1583 52.796C84.7823 52.444 85.4863 52.268 86.2703 52.268C87.0383 52.268 87.7263 52.444 88.3343 52.796C88.9583 53.132 89.4543 53.62 89.8223 54.26C90.1903 54.884 90.3743 55.636 90.3743 56.516C90.3743 57.396 90.1903 58.156 89.8223 58.796C89.4543 59.436 88.9583 59.932 88.3343 60.284C87.7263 60.62 87.0303 60.788 86.2463 60.788ZM86.2463 58.652C86.7263 58.652 87.1263 58.476 87.4463 58.124C87.7823 57.756 87.9503 57.22 87.9503 56.516C87.9503 55.812 87.7823 55.276 87.4463 54.908C87.1263 54.54 86.7263 54.356 86.2463 54.356C85.7663 54.356 85.3583 54.54 85.0223 54.908C84.7023 55.276 84.5423 55.812 84.5423 56.516C84.5423 57.22 84.7023 57.756 85.0223 58.124C85.3583 58.476 85.7663 58.652 86.2463 58.652Z"
              fill="#242731"
            />
          </svg>
        </div>
        <div className="bg-white rounded-lg p-4 space-y-5  flex flex-col items-center w-100">
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19"
              cy="19.5"
              r="19"
              fill="#A162F7"
              fillOpacity="0.1"
            />
            <path
              d="M19.3835 11.6191C19.3187 11.5435 19.2243 11.5 19.1248 11.5C19.0254 11.5 18.9309 11.5435 18.8662 11.6191C18.6247 11.9015 13 18.6152 13 21.8272C13.018 23.4349 13.6729 24.9699 14.8212 26.0951C15.9695 27.2204 17.5172 27.8442 19.1249 27.8298C20.7326 27.8442 22.2804 27.2204 23.4287 26.0951C24.577 24.9699 25.2319 23.435 25.2499 21.8272C25.2499 18.6152 19.6252 11.9014 19.3837 11.6191H19.3835ZM21.3196 25.9447C21.2727 25.9701 21.2199 25.983 21.1665 25.982C21.0097 25.9811 20.8738 25.8732 20.8375 25.7207C20.8011 25.5681 20.8738 25.4104 21.0134 25.339C21.669 25.015 22.2216 24.5149 22.6092 23.8947C22.9969 23.2744 23.2042 22.5586 23.2081 21.8273C23.2081 21.6394 23.3604 21.4871 23.5484 21.4871C23.7363 21.4871 23.8886 21.6394 23.8886 21.8273C23.8852 22.6845 23.643 23.5237 23.1892 24.2511C22.7354 24.9783 22.0881 25.5647 21.3196 25.9446L21.3196 25.9447Z"
              fill="#A162F7"
            />
          </svg>

          <div className="  text-black font-semibold text-lg">Break fluid</div>

          <svg
            width="112"
            height="113"
            viewBox="0 0 112 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
              fill="#F4F5F9"
            />
            <path
              d="M20.8528 92.6224C18.6959 94.8391 15.1259 94.9041 13.1357 92.5368C9.61986 88.3549 6.72836 83.673 4.5608 78.6361C2.39323 73.5992 0.981241 68.2807 0.361475 62.8526C0.0106315 59.7797 2.51221 57.2319 5.60472 57.1896C8.69722 57.1473 11.2026 59.63 11.6301 62.6931C12.1824 66.65 13.2627 70.5237 14.8486 74.2089C16.4345 77.8942 18.5048 81.3418 20.9986 84.4632C22.929 86.8795 23.0096 90.4058 20.8528 92.6224Z"
              fill="#A162F7"
            />
            <path
              d="M45.368 60.788C44.2 60.788 43.216 60.564 42.416 60.116C41.616 59.652 40.992 59.052 40.544 58.316C40.096 57.58 39.832 56.788 39.752 55.94H42.608C42.736 56.676 43.04 57.244 43.52 57.644C44.016 58.044 44.64 58.244 45.392 58.244C46.464 58.244 47.328 57.756 47.984 56.78C48.64 55.788 48.992 54.284 49.04 52.268C48.656 52.924 48.072 53.468 47.288 53.9C46.52 54.332 45.672 54.548 44.744 54.548C43.816 54.548 42.944 54.324 42.128 53.876C41.312 53.428 40.648 52.796 40.136 51.98C39.624 51.164 39.368 50.204 39.368 49.1C39.368 48.092 39.616 47.156 40.112 46.292C40.608 45.428 41.296 44.732 42.176 44.204C43.056 43.676 44.088 43.412 45.272 43.412C46.536 43.412 47.6 43.644 48.464 44.108C49.328 44.572 50.016 45.196 50.528 45.98C51.056 46.764 51.432 47.636 51.656 48.596C51.896 49.556 52.016 50.54 52.016 51.548C52.016 53.42 51.752 55.052 51.224 56.444C50.712 57.82 49.952 58.892 48.944 59.66C47.952 60.412 46.76 60.788 45.368 60.788ZM45.464 51.956C46.056 51.956 46.592 51.828 47.072 51.572C47.552 51.3 47.928 50.948 48.2 50.516C48.472 50.068 48.608 49.572 48.608 49.028C48.608 48.164 48.304 47.452 47.696 46.892C47.104 46.332 46.352 46.052 45.44 46.052C44.544 46.052 43.8 46.332 43.208 46.892C42.616 47.436 42.32 48.132 42.32 48.98C42.32 49.876 42.616 50.596 43.208 51.14C43.8 51.684 44.552 51.956 45.464 51.956ZM58.2989 51.956C57.5309 51.956 56.8349 51.788 56.2109 51.452C55.5869 51.1 55.0909 50.604 54.7229 49.964C54.3549 49.324 54.1709 48.564 54.1709 47.684C54.1709 46.804 54.3549 46.044 54.7229 45.404C55.0909 44.764 55.5869 44.276 56.2109 43.94C56.8349 43.588 57.5389 43.412 58.3229 43.412C59.0909 43.412 59.7789 43.588 60.3869 43.94C61.0109 44.276 61.5069 44.764 61.8749 45.404C62.2429 46.044 62.4269 46.804 62.4269 47.684C62.4269 48.564 62.2429 49.324 61.8749 49.964C61.5069 50.604 61.0109 51.1 60.3869 51.452C59.7629 51.788 59.0669 51.956 58.2989 51.956ZM57.3869 60.5L66.8669 43.7H69.8669L60.3869 60.5H57.3869ZM58.2989 49.82C58.7629 49.82 59.1629 49.644 59.4989 49.292C59.8349 48.924 60.0029 48.388 60.0029 47.684C60.0029 46.98 59.8349 46.444 59.4989 46.076C59.1789 45.708 58.7789 45.524 58.2989 45.524C57.8189 45.524 57.4109 45.708 57.0749 46.076C56.7549 46.444 56.5949 46.98 56.5949 47.684C56.5949 48.388 56.7549 48.924 57.0749 49.292C57.4109 49.644 57.8189 49.82 58.2989 49.82ZM69.0509 60.788C68.2829 60.788 67.5869 60.62 66.9629 60.284C66.3389 59.932 65.8429 59.436 65.4749 58.796C65.1069 58.156 64.9229 57.396 64.9229 56.516C64.9229 55.636 65.1069 54.884 65.4749 54.26C65.8429 53.62 66.3389 53.132 66.9629 52.796C67.5869 52.444 68.2909 52.268 69.0749 52.268C69.8429 52.268 70.5309 52.444 71.1389 52.796C71.7629 53.132 72.2589 53.62 72.6269 54.26C72.9949 54.884 73.1789 55.636 73.1789 56.516C73.1789 57.396 72.9949 58.156 72.6269 58.796C72.2589 59.436 71.7629 59.932 71.1389 60.284C70.5309 60.62 69.8349 60.788 69.0509 60.788ZM69.0509 58.652C69.5309 58.652 69.9309 58.476 70.2509 58.124C70.5869 57.756 70.7549 57.22 70.7549 56.516C70.7549 55.812 70.5869 55.276 70.2509 54.908C69.9309 54.54 69.5309 54.356 69.0509 54.356C68.5709 54.356 68.1629 54.54 67.8269 54.908C67.5069 55.276 67.3469 55.812 67.3469 56.516C67.3469 57.22 67.5069 57.756 67.8269 58.124C68.1629 58.476 68.5709 58.652 69.0509 58.652Z"
              fill="#242731"
            />
          </svg>
        </div>
        <div className="bg-white rounded-lg p-4 space-y-5  flex flex-col items-center w-100">
          <svg
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="19"
              cy="19.5"
              r="19"
              fill="#F6CC0D"
              fillOpacity="0.1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.1999 29.5C19.7985 29.5 17.6245 29.2815 17.5035 29.2571C14.9658 28.7421 13 24.8689 13 20.5C13 16.1346 14.9632 12.2617 17.4981 11.7429C17.62 11.718 19.7984 11.5 20.1996 11.5C23.1819 11.5 25.5995 15.5291 25.5995 20.4997C25.5995 25.4704 23.1819 29.4995 20.1996 29.4995L20.1999 29.5ZM21.1 25.9001C22.5911 25.9001 23.7999 23.4825 23.7999 20.5002C23.7999 17.5179 22.5911 15.1003 21.1 15.1003C19.6088 15.1003 18.4 17.5179 18.4 20.5002C18.4 23.4825 19.6088 25.9001 21.1 25.9001ZM20.3862 16.3743C20.6344 16.1332 20.9056 16.0003 21.1896 16.0003C21.4744 16.0003 21.7463 16.1338 21.9949 16.3762C22.0568 16.4365 21.9679 16.9102 21.7284 17.7973C21.5474 18.4027 21.3678 18.7063 21.1896 18.7079C21.0113 18.7096 20.8328 18.4093 20.654 17.8071C20.4138 16.9119 20.3246 16.4342 20.3862 16.3743L20.3862 16.3743ZM22.5791 17.3944C22.7511 17.8872 22.8875 18.4664 22.9752 19.1161C23.0632 19.7675 23.0944 20.4304 23.0754 21.074C23.0707 21.2341 22.8559 21.1773 22.431 20.9035C22.1355 20.6767 21.96 20.3599 21.9043 19.9528C21.8487 19.5457 21.9122 19.0446 22.0952 18.4494C22.3749 17.6236 22.5363 17.272 22.5791 17.3944L22.5791 17.3944ZM22.8531 22.7241C22.7114 23.2698 22.5245 23.7606 22.2946 24.1621C22.0643 24.5647 21.8116 24.8409 21.5513 24.9962C21.4865 25.0349 21.4426 24.5261 21.4196 23.47C21.4179 22.7243 21.489 22.2248 21.6328 21.9717C21.7766 21.7184 21.9945 21.7089 22.2863 21.9434C22.6995 22.3283 22.8884 22.5886 22.8531 22.7241L22.8531 22.7241ZM20.8298 24.998C20.5701 24.8425 20.3183 24.5666 20.0884 24.1651C19.858 23.7625 19.6707 23.2703 19.5288 22.7228C19.4935 22.5866 19.6811 22.3289 20.0918 21.9498C20.3863 21.7158 20.6058 21.724 20.7502 21.9747C20.8949 22.2253 20.9659 22.7205 20.9634 23.4604C20.9389 24.5241 20.8943 25.0367 20.8298 24.998L20.8298 24.998ZM19.3052 21.0734C19.2864 20.4314 19.3177 19.7703 19.4056 19.1206C19.4936 18.4693 19.6304 17.8887 19.8031 17.395C19.846 17.2722 20.0058 17.6218 20.2828 18.4437C20.4663 19.0447 20.5309 19.5493 20.4764 19.9573C20.422 20.3655 20.2481 20.681 19.9547 20.9039C19.5263 21.1764 19.3098 21.2329 19.3053 21.0734L19.3052 21.0734Z"
              fill="#F6CC0D"
            />
          </svg>

          <div className="  text-black font-semibold text-lg">Tire Wear</div>

          <svg
            width="112"
            height="113"
            viewBox="0 0 112 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
              fill="#F4F5F9"
            />
            <path
              d="M20.8528 92.6224C18.6959 94.8391 15.1257 94.9039 13.1354 92.5366C5.53733 83.4993 0.957527 72.2477 0.134156 60.3739C-0.689216 48.5002 2.29377 36.7242 8.57173 26.7246C10.2162 24.1053 13.7613 23.6767 16.2034 25.5744C18.6455 27.4722 19.0523 30.976 17.4738 33.6356C12.851 41.4248 10.6747 50.4759 11.3073 59.5992C11.94 68.7224 15.3447 77.3865 20.9983 84.4631C22.9288 86.8794 23.0096 90.4058 20.8528 92.6224Z"
              fill="#F6CC0D"
            />
            <path
              d="M32.224 60.5V58.268C33.248 57.42 34.24 56.58 35.2 55.748C36.176 54.916 37.04 54.092 37.792 53.276C38.56 52.46 39.168 51.668 39.616 50.9C40.08 50.116 40.312 49.356 40.312 48.62C40.312 47.932 40.12 47.324 39.736 46.796C39.368 46.268 38.752 46.004 37.888 46.004C37.008 46.004 36.344 46.292 35.896 46.868C35.448 47.444 35.224 48.14 35.224 48.956H32.248C32.28 47.724 32.552 46.7 33.064 45.884C33.576 45.052 34.256 44.436 35.104 44.036C35.952 43.62 36.904 43.412 37.96 43.412C39.672 43.412 41 43.884 41.944 44.828C42.904 45.756 43.384 46.964 43.384 48.452C43.384 49.38 43.168 50.284 42.736 51.164C42.32 52.044 41.768 52.892 41.08 53.708C40.392 54.524 39.648 55.292 38.848 56.012C38.048 56.716 37.272 57.372 36.52 57.98H43.792V60.5H32.224ZM52.3669 60.788C51.1349 60.788 50.0709 60.572 49.1749 60.14C48.2949 59.708 47.5989 59.116 47.0869 58.364C46.5909 57.596 46.3029 56.732 46.2229 55.772H49.2229C49.3669 56.46 49.7189 57.036 50.2789 57.5C50.8389 57.948 51.5349 58.172 52.3669 58.172C53.2629 58.172 53.9909 57.844 54.5509 57.188C55.1269 56.532 55.4149 55.716 55.4149 54.74C55.4149 53.732 55.1269 52.932 54.5509 52.34C53.9909 51.748 53.2789 51.452 52.4149 51.452C51.6949 51.452 51.0709 51.628 50.5429 51.98C50.0149 52.332 49.6389 52.772 49.4149 53.3H46.4629L47.9029 43.7H57.2149V46.388H50.2069L49.4389 50.276C49.7909 49.892 50.2709 49.58 50.8789 49.34C51.4869 49.084 52.1669 48.956 52.9189 48.956C54.1189 48.956 55.1189 49.228 55.9189 49.772C56.7189 50.3 57.3269 51.004 57.7429 51.884C58.1589 52.748 58.3669 53.692 58.3669 54.716C58.3669 55.884 58.1109 56.924 57.5989 57.836C57.1029 58.748 56.3989 59.468 55.4869 59.996C54.5909 60.524 53.5509 60.788 52.3669 60.788ZM64.6818 51.956C63.9138 51.956 63.2178 51.788 62.5938 51.452C61.9698 51.1 61.4738 50.604 61.1058 49.964C60.7378 49.324 60.5538 48.564 60.5538 47.684C60.5538 46.804 60.7378 46.044 61.1058 45.404C61.4738 44.764 61.9698 44.276 62.5938 43.94C63.2178 43.588 63.9218 43.412 64.7058 43.412C65.4738 43.412 66.1618 43.588 66.7698 43.94C67.3938 44.276 67.8898 44.764 68.2578 45.404C68.6258 46.044 68.8098 46.804 68.8098 47.684C68.8098 48.564 68.6258 49.324 68.2578 49.964C67.8898 50.604 67.3938 51.1 66.7698 51.452C66.1458 51.788 65.4498 51.956 64.6818 51.956ZM63.7698 60.5L73.2498 43.7H76.2498L66.7698 60.5H63.7698ZM64.6818 49.82C65.1458 49.82 65.5458 49.644 65.8818 49.292C66.2178 48.924 66.3858 48.388 66.3858 47.684C66.3858 46.98 66.2178 46.444 65.8818 46.076C65.5618 45.708 65.1618 45.524 64.6818 45.524C64.2018 45.524 63.7938 45.708 63.4578 46.076C63.1378 46.444 62.9778 46.98 62.9778 47.684C62.9778 48.388 63.1378 48.924 63.4578 49.292C63.7938 49.644 64.2018 49.82 64.6818 49.82ZM75.4338 60.788C74.6658 60.788 73.9698 60.62 73.3458 60.284C72.7218 59.932 72.2258 59.436 71.8578 58.796C71.4898 58.156 71.3058 57.396 71.3058 56.516C71.3058 55.636 71.4898 54.884 71.8578 54.26C72.2258 53.62 72.7218 53.132 73.3458 52.796C73.9698 52.444 74.6738 52.268 75.4578 52.268C76.2258 52.268 76.9138 52.444 77.5218 52.796C78.1458 53.132 78.6418 53.62 79.0098 54.26C79.3778 54.884 79.5618 55.636 79.5618 56.516C79.5618 57.396 79.3778 58.156 79.0098 58.796C78.6418 59.436 78.1458 59.932 77.5218 60.284C76.9138 60.62 76.2178 60.788 75.4338 60.788ZM75.4338 58.652C75.9138 58.652 76.3138 58.476 76.6338 58.124C76.9698 57.756 77.1378 57.22 77.1378 56.516C77.1378 55.812 76.9698 55.276 76.6338 54.908C76.3138 54.54 75.9138 54.356 75.4338 54.356C74.9538 54.356 74.5458 54.54 74.2098 54.908C73.8898 55.276 73.7298 55.812 73.7298 56.516C73.7298 57.22 73.8898 57.756 74.2098 58.124C74.5458 58.476 74.9538 58.652 75.4338 58.652Z"
              fill="#242731"
            />
          </svg>
        </div>
      </div>

 
  );
};

export default React.memo(Chart);
