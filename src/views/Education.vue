
<template>
  <div class="bg-dark">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
        </div>
        <div class="hidden lg:flex lg:gap-x-12 ">
          <router-link to="/" class="text-sm font-semibold leading-6 text-white-900">HOME</router-link>
          <router-link to="/Education" class="text-sm font-semibold leading-6 text-white-900">EDUCATION</router-link>
          <router-link to="/Work" class="text-sm font-semibold leading-6 text-white-900">WORK EXPERIENCE</router-link>
          <router-link to="/Academic" class="text-sm font-semibold leading-6 text-white-900">ACADEMIC
            EXPERIENCE</router-link>
          <router-link to="/Training" class="text-sm font-semibold leading-6 text-white-900">TRAINING
            CERTIFIED</router-link>
          <router-link to="/Skil" class="text-sm font-semibold leading-6 text-white-900">SKIL</router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
    </header>

    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    <div class=" py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-900  font-bold tracking-tight sm:text-4xl">
            Education</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">ประวัติการศึกษา</p>
        </div>
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">

            <img
              class="h-48  transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 mb-3"
              :src="post.author.imageUrl" alt="image description">

            <div class="flex items-center gap-x-4 text-xs mt-4">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>-
              <time :enddate="post.enddate" class="text-gray-500">{{ post.enddate }}</time>
            </div>
            <div class="group relative">
              <h2 class="mt-3 text-lg font-semibold leading-7 text-gray-900 group-hover:text-gray-600">
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h2>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <!-- <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" /> -->
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'โรงเรียนม่สงสามสิบอัมพวันวิทยา',
    href: '#',
    description:
                'เรียนในระดับมัธยมศึกษาตอนต้น ที่โรงเรียนม่วงสามสิบอัมพวันวิทยา โรงเรียนประจำอำเภอ',
    date: 'มกราคม 2556',
    enddate: 'เมษยน 2559',
    datetime: '2020-03-16',
    author: {
      name: 'GPA',
      role: '3.00',
      href: '#',
      imageUrl:
        'https://data.bopp-obec.info/emis/pic_school/1034711140.jpg',
    },
  },
  {
    id: 2,
    title: 'โรงเรียนม่วงสามสิบอัมพวันวิทยา',
    href: '#',
    description:
                'เรียนในระดับมัธยมศึกษาตอนปลาย ที่โรงเรียนม่วงสามสิบอัมพวันวิทยา โรงเรียนประจำอำเภอ',
    date: 'มกราคม 2556',
    enddate: 'เมษยน 2559',
    datetime: '2020-03-16',
    author: {
      name: 'GPA',
      role: '3.00',
      href: '#',
      imageUrl:
        'https://data.bopp-obec.info/emis/pic_school/1034711140.jpg',
    },
  },
  {
    id: 3,
    title: 'Mahasarakham University',
    href: '#',
    description:
                'Bachelor of Science (Information technology) มหาวิิทยาลัยมหาสารคาม Mahasarakham University (MSU) ',
    date: 'มกราคม 2556',
    enddate: 'เมษยน 2559',
    datetime: '2020-03-16',
    author: {
      name: 'GPA',
      role: '3.19',
      href: '#',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/th/thumb/7/7a/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1.svg/230px-%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1.svg.png',
    },
  },
  // More posts...
]
</script>
