import { ProjectGalleryParallax } from "./ProjectGalleryParallax"

const ProjectGallery = () => {
    return(
        <div className="bg-[#050922] flex flex-col md:flex-row items-center gap-5 md:pl-10">
            <div className="text-white w-[300px] max-md:py-10">
                <h1 className="text-3xl mb-2 text-[#FCFFFF] font-bold uppercase max-md:text-center">Project Gallery</h1>
                <p className="text-sm text-[#B4B4B4] max-md:text-center">This section highlights a selection of my most notable projects, demonstrating my skills and expertise in frontend development </p>
            </div>

            <ProjectGalleryParallax />
        </div>
    )
}

export default ProjectGallery