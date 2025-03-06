export default function BlitsCard({ bgImg }) {
  return (
    <>
      <img
        width={120}
        height={180}
        radius={40}
        src={bgImg}
        alt="Random image"
      />
    </>
  );
}
