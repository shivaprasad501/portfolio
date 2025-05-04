interface Wrapper {
    title: string;
    image: string;
    link: string;
    description: string;
  }
  
  const ProjectWrapper = ({ title, image, link, description }: Wrapper) => {
    return (
      <div className="flex flex-col justify-center items-center p-5 border border-blue-300 border-x-blue-500  max-w-[500px] h-100 rounded-xl ">

        <img src={image} alt={title} className="w-full h-[60%] xl:h-[70%] " />
        <div className="flex flex-col items-center mt-3 h-[40%] xl:h-[30%]">
          <div className="text-sm md:text-lg font-bold text-center">{title}</div>
          <div className="md:text-sm text-base px-5 text-gray-300 mt-1 ">{description}</div>
        </div>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-xs mt-2"
          >
            Visit Project
          </a>

      </div>
    );
  };
  
  export default ProjectWrapper;
  