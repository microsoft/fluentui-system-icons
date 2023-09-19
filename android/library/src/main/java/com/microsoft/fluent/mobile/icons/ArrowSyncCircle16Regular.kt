package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSyncCircle16: ImageVector
  get() {
    if (_arrowSyncCircle16 != null) {
      return _arrowSyncCircle16!!
    }
    _arrowSyncCircle16 = fluentIcon(name = "Regular.ArrowSyncCircle16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveTo(7.0F, 8.0F)
          horizontalLineTo(5.5F)
          curveTo(5.255F, 8.0F, 5.05F, 8.177F, 5.008F, 8.41F)
          lineTo(5.0F, 8.5F)
          verticalLineToRelative(1.501F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          curveToRelative(0.245F, 0.0F, 0.45F, -0.177F, 0.492F, -0.41F)
          lineTo(6.0F, 10.001F)
          verticalLineTo(9.764F)
          curveToRelative(0.494F, 0.56F, 1.214F, 0.902F, 2.0F, 0.902F)
          curveToRelative(0.734F, 0.0F, 1.421F, -0.298F, 1.92F, -0.816F)
          curveToRelative(0.192F, -0.2F, 0.186F, -0.516F, -0.013F, -0.707F)
          curveTo(9.708F, 8.95F, 9.392F, 8.957F, 9.2F, 9.156F)
          curveTo(8.888F, 9.48F, 8.46F, 9.666F, 8.0F, 9.666F)
          curveTo(7.462F, 9.666F, 6.974F, 9.41F, 6.666F, 9.0F)
          horizontalLineTo(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -0.245F, -0.177F, -0.45F, -0.41F, -0.492F)
          lineTo(7.0F, 8.0F)
          close()
          moveToRelative(1.0F, -2.666F)
          curveToRelative(-0.737F, 0.0F, -1.427F, 0.3F, -1.927F, 0.823F)
          curveToRelative(-0.19F, 0.2F, -0.184F, 0.516F, 0.016F, 0.707F)
          curveToRelative(0.2F, 0.19F, 0.516F, 0.184F, 0.707F, -0.016F)
          curveTo(7.109F, 6.521F, 7.539F, 6.334F, 8.0F, 6.334F)
          curveTo(8.539F, 6.334F, 9.027F, 6.59F, 9.334F, 7.0F)
          horizontalLineToRelative(-0.33F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          curveToRelative(0.0F, 0.245F, 0.177F, 0.45F, 0.41F, 0.492F)
          lineTo(9.004F, 8.0F)
          horizontalLineTo(10.5F)
          curveToRelative(0.245F, 0.0F, 0.45F, -0.177F, 0.492F, -0.41F)
          lineTo(11.0F, 7.5F)
          verticalLineTo(6.003F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          curveToRelative(-0.245F, 0.0F, -0.45F, 0.177F, -0.492F, 0.41F)
          lineTo(10.0F, 6.003F)
          verticalLineToRelative(0.234F)
          curveTo(9.509F, 5.678F, 8.789F, 5.334F, 8.0F, 5.334F)
          close()        
      }
    }
    return _arrowSyncCircle16!!
  }

private var _arrowSyncCircle16: ImageVector? = null
