import React from 'react';

export default function About() {
  return (
    <div className='grid h-full w-full place-items-center sm:grid-cols-2'>
      <div className='bg-custom-blue-3 w-[90%] h-[90%]'></div>

      <div className='text-custom-white text-2xl w-[90%] sm:w-[65%]'>
        <p className='mb-10 leading-relaxed'>
          Hello! I&apos;m a software engineer and web developer currently based in Melbourne, Australia. I studied
          computing and software systems at The University of Melbourne, where I learned the fundamentals to create
          elegant, user-friendly software solutions. Throughout my studies, I worked both individually and in small
          teams to create tailored solutions that impressed our clients.
        </p>

        <p className='mb-10 leading-relaxed'>
          I&apos;m comfortable programming in a range of languages using a variety of frameworks. For instancce, this
          website was made using Next.js and Typescript, and is being self-hosted from a small server at home. I&apos;ve
          also worked with Express and React, as well as making custom software in Python, Java, and C.
        </p>

        <p className='leading-relaxed'>
          With 2 years of experience, I&apos;m looking to continue to grow my skillset. I&apos;m excited to make the
          leap and continue to hone my craft with the right company.
        </p>
      </div>
    </div>
  );
}
