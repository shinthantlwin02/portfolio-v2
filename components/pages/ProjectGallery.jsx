import { ProjectGalleryParallax } from "./ProjectGalleryParallax"

const ProjectGallery = () => {
    return(
        <div className="bg-[#050922] flex items-center gap-5 pl-10">
            <div className="text-white w-[300px]">
                <h1 className="text-3xl mb-2 text-[#FCFFFF] font-bold uppercase">Project Gallery</h1>
                <p className="text-sm text-[#B4B4B4]">This section highlights a selection of my most notable projects, demonstrating my skills and expertise in frontend development </p>
            </div>

            <ProjectGalleryParallax />
        </div>
    )
}

export default ProjectGallery