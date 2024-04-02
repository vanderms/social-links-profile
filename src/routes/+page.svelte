<script lang="ts">
  type SocialLink = { name: string; href: string };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      href: "https://github.com/",
    },
    {
      name: "Frontend Mentor",
      href: "https://www.frontendmentor.io/home",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
    },
  ];
</script>

<header class="sr-only">
  <h1>Social Media Profile: Jessica Randall</h1>
</header>
<main class="mx-6">
  <article
    class="mx-auto my-[7.25rem] bg-neutral-900 p-6 max-w-[24rem] rounded-xl sm:p-10 sm:my-[10.875rem]"
  >
    <figure class="flex justify-center">
      <img
        src="/images/avatar-jessica.jpeg"
        alt="Jessica Randall"
        class="w-[5.5rem] aspect-square rounded-full"
      />
    </figure>
    <header class="mt-6">
      <h2 class="heading text-neutral-000 text-center">Jessica Randall</h2>
      <p class="body-bold text-primary-700 text-center mt-1">
        London, United Kingdom
      </p>
    </header>

    <p class="mt-6 text-neutral-000 body-regular text-center">
      "Front-end developer and avid reader."
    </p>

    <ul class="mt-6 grid gap-4">
      {#each socialLinks as link}
        <li>
          <a
            class="grid place-items-center w-full h-[2.8125rem] rounded-lg body-bold text-neutral-000 bg-neutral-700 hover:text-neutral-700 hover:bg-primary-700"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer">{link.name}</a
          >
        </li>
      {/each}
    </ul>
  </article>
</main>
