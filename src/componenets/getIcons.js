async function getIcon(icon) {
  try {
    const iconView = await import(`../../public/icons/${icon}.svg`);

    return iconView.default;
  } catch (err) {
    console.error(`Icon not found in bundle: ${icon}.svg ` + err);
    return "";
  }
}

export default getIcon;
