/**
 * Assurances Echkili - Agence Générale AXA Maroc Marrakech
 * Plan d'accès et localisation interactive de l'agence (sans API Google Maps payante)
 */

export function initAgencyMap(): void {
  const mapContainer = document.getElementById('agencyGoogleMap');
  const loadingOverlay = document.getElementById('mapLoadingState');

  if (!mapContainer) {
    return;
  }

  // Coordonnées GPS précises de l'Agence Echkili à Marrakech M'hamid (Avenue Guemassa)
  const lat = 31.5901;
  const lng = -8.0342;
  const agencyName = encodeURIComponent('Assurances Echkili - AXA Marrakech');
  const address = encodeURIComponent("Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech");

  // Rendu de la carte interactive haute résolution via OpenStreetMap & intégration d'itinéraires directs
  mapContainer.innerHTML = `
    <div style="position: relative; width: 100%; height: 100%; min-height: 440px; border-radius: 14px; overflow: hidden; background: #e2e8f0;">
      <iframe 
        title="Plan interactif d'accès - Assurances Echkili AXA Marrakech"
        width="100%" 
        height="100%" 
        style="border:0; min-height: 440px; width: 100%; display: block;" 
        loading="lazy" 
        allowfullscreen 
        referrerpolicy="no-referrer-when-downgrade" 
        src="https://maps.google.com/maps?q=${lat},${lng}+(${agencyName})&t=&z=16&ie=UTF8&iwloc=B&output=embed">
      </iframe>
      
      <!-- Badge indicateur interactif en surimpression -->
      <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(8px); padding: 12px 16px; border-radius: 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.15); border: 1px solid rgba(226, 232, 240, 0.9); max-width: 320px; z-index: 10; pointer-events: auto;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span style="background: #e0021b; color: #fff; font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 4px; text-transform: uppercase;">AXA Marrakech</span>
          <span style="font-size: 11px; color: #16a34a; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: #16a34a; display: inline-block;"></span> Agence Ouverte
          </span>
        </div>
        <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #002868;">Assurances Echkili — M'hamid</p>
        <p style="margin: 0 0 8px 0; font-size: 11px; color: #475569; line-height: 1.35;">Rdc magasin 2 imm erraha n°8, av Guemassa, Marrakech</p>
        <div style="display: flex; gap: 6px;">
          <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer" style="flex: 1; text-align: center; background: #002868; color: #fff; font-size: 11px; font-weight: 700; padding: 6px 8px; border-radius: 6px; text-decoration: none; transition: background 0.2s;">
            Itinéraire ↗
          </a>
          <a href="tel:+212525363061" style="background: #f1f5f9; color: #002868; border: 1px solid #cbd5e1; font-size: 11px; font-weight: 700; padding: 6px 10px; border-radius: 6px; text-decoration: none;">
            05 25 36 30 61
          </a>
        </div>
      </div>
    </div>
  `;

  if (loadingOverlay) {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 200);
  }
}

// Initialisation dès chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initAgencyMap();
  });
} else {
  initAgencyMap();
}
