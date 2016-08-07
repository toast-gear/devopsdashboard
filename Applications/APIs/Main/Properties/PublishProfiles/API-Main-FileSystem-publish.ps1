[cmdletbinding(SupportsShouldProcess=$true)]
param($publishProperties=@{}, $packOutput, $pubProfilePath)

# to learn more about this file visit https://go.microsoft.com/fwlink/?LinkId=524327

try{
    if ($publishProperties['ProjectGuid'] -eq $null){
        $publishProperties['ProjectGuid'] = '44caaf2b-ced8-4470-bd08-3c18260467ca'
    }

    $publishModulePath = Join-Path (Split-Path $MyInvocation.MyCommand.Path) 'publish-module.psm1'
    Import-Module $publishModulePath -DisableNameChecking -Force

    # call Publish-AspNet to perform the publish operation
    Publish-AspNet -publishProperties $publishProperties -packOutput $packOutput -pubProfilePath $pubProfilePath
}
catch{
    "An error occurred during publish.`n{0}" -f $_.Exception.Message | Write-Error
}