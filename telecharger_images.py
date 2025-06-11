import requests

images = {
    "logo.png": "https://placehold.co/150x50?text=Petit+Coin&font=PlayfairDisplay",
    "plat_signature.png": "https://placehold.co/400x400?text=Plat+Signature",
    "plat1.png": "https://placehold.co/300x300?text=Plat+1",
    "plat2.png": "https://placehold.co/300x300?text=Plat+2",
    "plat3.png": "https://placehold.co/300x300?text=Plat+3",
    "plat4.png": "https://placehold.co/300x300?text=Plat+4"
}

for filename, url in images.items():
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
        response.raise_for_status()

        # Vérifie si le contenu est bien une image
        if "image" not in response.headers.get("Content-Type", ""):
            print(f"❌ {filename} n'est pas une image valide.")
            continue

        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"✅ Téléchargé : {filename}")
    except Exception as e:
        print(f"Erreur pour {filename} : {e}")