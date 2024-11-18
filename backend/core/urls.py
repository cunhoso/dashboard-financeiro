from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FuncionarioViewSet, ClienteViewSet, GastoViewSet, LucroViewSet

router = DefaultRouter()
router.register(r'funcionarios', FuncionarioViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'gastos', GastoViewSet)
router.register(r'lucros', LucroViewSet)

urlpatterns = [
    path('', include(router.urls)),
]