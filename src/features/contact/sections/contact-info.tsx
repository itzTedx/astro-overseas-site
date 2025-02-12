import { IconBrandInstagram, IconPhone, IconSend } from "@tabler/icons-react";

export const ContactInfo = () => {
  return (
    <section className="space-y-12">
      <div>
        <h2 className="text-2xl">Chat with us</h2>
        <p className="pb-6 pt-1 text-neutral-600">
          Talk with our friendly team via live chat.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-xl">
            <IconSend className="size-4" />
            Shoot us an email
          </li>
          <li className="flex items-center gap-2 text-xl">
            <IconBrandInstagram className="size-5" />
            Message us on Instagram
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl">Call us</h2>
        <p className="pb-6 pt-1 text-neutral-600">
          Call our team Mon - Sat from 8am to 6pm
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-xl">
            <IconPhone className="size-4" />
            +971 987654321
          </li>
        </ul>
      </div>
    </section>
  );
};
