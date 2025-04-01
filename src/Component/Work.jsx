import React from "react";

const Work = () => {
  const image = [
    {
      url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      top: "50%",
      left: "50%",
      isActive: "true",
    },
    {
      url: "https://i.pinimg.com/474x/17/1c/a2/171ca25053719bcd076a12e1e9d8a846.jpg",
      top: "60%",
      left: "40%",
      isActive: "true",
    },
    {
      url: "https://i.pinimg.com/474x/cc/a5/14/cca51406908359459df4e544376b0c37.jpg",
      top: "50%",
      left: "60%",
      isActive: "true",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxgaMSdnojBVVQviM92lmRx-DcDP_63fn5Q&s",
      top: "55%",
      left: "45%",
      isActive: "true",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSb6DKzPKjivmME0g6Mr1R-LIprDB74UZ9Ww&s",
      top: "70%",
      left: "40%",
      isActive: "true",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEll8uICS2xqheOz2l1Vh1DcvpEyxgVrNfw&s",
      top: "40%",
      left: "55%",
      isActive: "true",
    },
  ];

  return (
    <div className="relative max-w-screen-xl m-auto text-center select-none font-medium mt-20">
      <h1 className="text-[30vw] leading-none">Work</h1>
      <div className="absolute top-0 left-0 w-full h-full">
        {image.map((item, index) => {
          return (
            !item.isActive && (
              <img
                src={item.url}
                key={index}
                className="rounded-xl absolute w-52 -translate-x-[50%] -translate-y-[50%]"
                style={{ top: item.top, left: item.left }}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Work;
