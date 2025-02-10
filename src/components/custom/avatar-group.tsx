import Image from "next/image";

import { IconPlus } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export default function AvatarGroup() {
  return (
    <div className="flex -space-x-3">
      <Image
        className="rounded-full ring-2 ring-background"
        src="/images/avatar/avatar-1.jpg"
        width={48}
        height={48}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src="/images/avatar/avatar-2.jpg"
        width={48}
        height={48}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-background"
        src="/images/avatar/avatar-3.jpg"
        width={48}
        height={48}
        alt="Avatar 03"
      />

      <Button
        variant="secondary"
        className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-2 ring-background hover:bg-blue-50 hover:text-blue-800"
        size="icon"
      >
        <IconPlus className="!size-5" />
      </Button>
    </div>
  );
}
