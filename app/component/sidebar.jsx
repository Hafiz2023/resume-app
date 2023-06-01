import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Medium } from "./icons/";

const Sidebar = ({ data }) => {
	const { name, role, education, contactLinks } = data;

	return (
		<div className='bg-green-light flex flex-col content-between w-auto h-1 sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
			<div className='flex flex-col p-10 items-center text-font-bold'>
				<Image
					priority
					width={250}
					height={250}
					className='mb-2 rounded'
					src='/pic.png'
					alt='/pic.png'
					aria-label='pic.png'
				/>
				<h1 className='mb-2 bg-white text-black rounded-full'>{name}</h1>
				<h2 className='mb-8 bg-white text-black text-center mt-4 sm:mt-8 rounded-xl'>{role}</h2>
				<p className='mb-2'>{education[0]}</p>
				<p className='mb-2'>{education[1]}</p>
				<div className='text-white text-center mb-4 mt-4 sm:mt-8'>
					<h3 className='mb-2 text-black bg-white rounded-2xl'> CONTACT ME</h3>
					<div className='flex flex-row justify-center gap-2'>
						<a
							className='icons-contactme'
							href={contactLinks?.[0]}
							aria-label={"email link"}
						>
							<Envelope />
						</a>
						<a
							className='icons-contactme'
							href={contactLinks?.[1]}
							aria-label={"twitter link"}
						>
							<Twitter />
						</a>
						<a
							className='icons-contactme'
							href={contactLinks?.[2]}
							aria-label={"linkedin link"}
						>
							<Linkedin />
						</a>
						<a
							className='icons-contactme font-bold'
							href={contactLinks?.[3]}
							aria-label={"medium link"}
						>
							<Medium />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
