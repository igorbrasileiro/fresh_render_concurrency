import Counter from "../../../islands/Counter.tsx";

export const handler = (req, ctx) => ctx.render({ site: ctx.params.site });

export default function Component(props) {
  const {
    data,
    url: { search },
  } = props;

  return <Counter site={data.site} />;
}
