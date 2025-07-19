// composables/useHeader.ts
import { useState } from '#app'
import { readonly } from 'vue'

// Definiujemy kształt ścieżki "breadcrumb"
export interface BreadcrumbItem {
  label: string;
  to?: string; // Opcjonalny link
}

// Definiujemy kształt całego stanu nagłówka
interface HeaderState {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export const useHeader = () => {
  const headerState = useState<HeaderState>('header-state', () => ({
    title: 'Dashboard', // Tytuł domyślny
    breadcrumbs: []     // Domyślnie pusta ścieżka
  }))

  // Funkcja do aktualizacji stanu z dowolnej strony
  const setHeader = (newState: Partial<HeaderState>) => {
    // Łączymy nowy stan z istniejącym
    headerState.value = { ...headerState.value, ...newState };
  }

  return {
    // Zwracamy stan jako `readonly`, aby uniknąć przypadkowych modyfikacji
    headerState: readonly(headerState),
    setHeader
  }
}