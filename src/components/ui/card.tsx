import { IconBrandAngular, IconBrandFlutter, IconBrandJavascript, IconBrandMongodb, IconBrandMysql, IconBrandNodejs, IconBrandReact, IconBrandReactNative, IconDatabase, IconNoDerivatives, IconSql } from "@tabler/icons-react";
import { animate, JSAnimation, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>Web Development</CardTitle>
      <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <IconBrandAngular className="h-4 w-4 text-[#BD002E]" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <IconBrandNodejs className="h-6 w-6 text-[#7EC623]" />
        </Container>
        <Container className="circle-3">
          <IconBrandReactNative className="h-6 w-6 text-[#61DAFB]" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <IconDatabase className="h-6 w-6 text-blue-600" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <IconBrandMongodb className="h-4 w-4 text-green-400 " />
        </Container>
      </div>

      <motion.div
        className="h-40 w-px absolute top-20 left-0 z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
        initial={{ left: "-60px", opacity: 0 }}
        animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
        transition={{
          left: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          opacity: {
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.1, 0.9, 1],
          },
        }}
        style={{ position: "absolute" }}
      >
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </motion.div>
    </div>
  );
};
const Sparkles = () => {
  // Sparkles move from left to right across the container
  const random = () => Math.random();
  const sparkles = Array.from({ length: 12 }).map((_, i) => {
    const top = `${random() * 100}%`;
    const delay = random() * 2;
    const duration = 3 + random() * 2;
    return (
      <motion.span
        key={`star-${i}`}
        initial={{ left: "0%", opacity: 0, scale: 1, top }}
        animate={{ left: "100%", opacity: [0, 1, 0], scale: [1, 1.2, 0.8] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top,
          width: `2px`,
          height: `2px`,
          borderRadius: "50%",
          zIndex: 1,
        }}
        className="inline-block bg-black "
      ></motion.span>
    );
  });
  return <div className="absolute inset-0">{sparkles}</div>;
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};


