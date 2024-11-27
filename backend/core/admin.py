from django.contrib import admin
from core.models import Funcionario, Cliente, Gasto, Lucro
<<<<<<< Updated upstream

class DbDisplay(admin.ModelAdmin):
    list_display = ("nome",)
    list_display_links = ("nome",)
    search_fields = ("nome",)


admin.site.register(Funcionario, DbDisplay)
admin.site.register(Lucro)
admin.site.register(Gasto)
admin.site.register(Cliente)


=======

class DbDisplay(admin.ModelAdmin):
    list_display = ("nome",)
    list_display_links = ("nome",)
    search_fields = ("nome",)


admin.site.register(Funcionario, DbDisplay)
admin.site.register(Lucro)
admin.site.register(Gasto)
admin.site.register(Cliente)
>>>>>>> Stashed changes
