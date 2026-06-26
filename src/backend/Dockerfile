# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY Jcf.Lab.Chat.Watson/ .

RUN dotnet restore Jcf.Lab.Chat.Watson.Api/Jcf.Lab.Chat.Watson.Api.csproj

RUN dotnet publish Jcf.Lab.Chat.Watson.Api/Jcf.Lab.Chat.Watson.Api.csproj \
    -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_ENVIRONMENT=Production

EXPOSE 5000

ENTRYPOINT ["dotnet", "Jcf.Lab.Chat.Watson.Api.dll"]