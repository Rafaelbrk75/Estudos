class EnergiaRenovavel:
    def __init__(self):
        self.energia_solar = 0
        self.energia_eolica = 0
        self.energia_hidrica = 0

    def monitorar_energia(self, tipo, quantidade):
        if tipo == "solar":
            self.energia_solar += quantidade
        elif tipo == "eolica":
            self.energia_eolica += quantidade
        elif tipo == "hidrica":
            self.energia_hidrica += quantidade

    def otimizar_uso(self):
        total = self.energia_solar + self.energia_eolica + self.energia_hidrica
        if total > 0:
            porcentagem_solar = (self.energia_solar / total) * 100
            porcentagem_eolica = (self.energia_eolica / total) * 100
            porcentagem_hidrica = (self.energia_hidrica / total) * 100

            return {
                "solar": porcentagem_solar,
                "eolica": porcentagem_eolica,
                "hidrica": porcentagem_hidrica
            }
        else:
            return {
                "solar": 0,
                "eolica": 0,
                "hidrica": 0
            }
