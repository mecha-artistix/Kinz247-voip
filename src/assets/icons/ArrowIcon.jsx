function ArrowIcon({ size, direction }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${direction}deg)` }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 0.6875C9.78125 0.6875 0.6875 9.78125 0.6875 21C0.6875 32.2188 9.78125 41.3125 21 41.3125C32.2188 41.3125 41.3125 32.2188 41.3125 21C41.3125 9.78125 32.2188 0.6875 21 0.6875ZM29.9167 22.1042C30.2093 21.8112 30.3736 21.4141 30.3736 21C30.3736 20.5859 30.2093 20.1888 29.9167 19.8958L23.6667 13.6458C23.5236 13.4923 23.3511 13.3692 23.1595 13.2838C22.9678 13.1984 22.7609 13.1525 22.5511 13.1488C22.3413 13.1451 22.1329 13.1837 21.9383 13.2622C21.7438 13.3408 21.567 13.4578 21.4187 13.6062C21.2703 13.7545 21.1533 13.9313 21.0747 14.1258C20.9962 14.3204 20.9576 14.5288 20.9613 14.7386C20.965 14.9484 21.0109 15.1553 21.0963 15.347C21.1817 15.5386 21.3048 15.7111 21.4583 15.8542L25.0417 19.4375H13.1875C12.7731 19.4375 12.3757 19.6021 12.0826 19.8951C11.7896 20.1882 11.625 20.5856 11.625 21C11.625 21.4144 11.7896 21.8118 12.0826 22.1049C12.3757 22.3979 12.7731 22.5625 13.1875 22.5625H25.0417L21.4583 26.1458C21.3048 26.2889 21.1817 26.4614 21.0963 26.653C21.0109 26.8447 20.965 27.0516 20.9613 27.2614C20.9576 27.4712 20.9962 27.6796 21.0747 27.8742C21.1533 28.0687 21.2703 28.2455 21.4187 28.3938C21.567 28.5422 21.7438 28.6592 21.9383 28.7378C22.1329 28.8163 22.3413 28.8549 22.5511 28.8512C22.7609 28.8475 22.9678 28.8016 23.1595 28.7162C23.3511 28.6308 23.5236 28.5077 23.6667 28.3542L29.9167 22.1042Z"
        fill="#1C77F6"
      />
    </svg>
  );
}

export default ArrowIcon;