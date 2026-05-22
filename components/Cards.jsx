export function FeatureList({ items, limit }) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <ul className="mt-5 grid gap-2 text-sm text-slate-600">
      {visibleItems.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ServiceCard({ service }) {
  return (
    <article className="card lift-card reveal-card p-6">
      <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
      {service.description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
      ) : null}
      <FeatureList items={service.items} />
    </article>
  );
}

export function ProductCard({ product, compact = false }) {
  return (
    <article className="card product-card reveal-card flex h-full flex-col p-6">
      {product.logo ? (
        <div className="product-logo-wrap">
          <img src={product.logo} alt={`${product.name} logo`} className="product-logo" loading="lazy" />
        </div>
      ) : null}
      <p className="mt-5 text-sm font-medium text-blue-700">{product.category}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{product.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
      <FeatureList items={product.features} limit={compact ? 5 : undefined} />
      <div className="mt-6 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
