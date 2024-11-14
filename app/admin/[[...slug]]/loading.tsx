import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton height={50}></Skeleton>
      <Skeleton height={200}></Skeleton>
    </>
  );
}
