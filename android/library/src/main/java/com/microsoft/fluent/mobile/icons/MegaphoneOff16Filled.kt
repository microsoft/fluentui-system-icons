package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MegaphoneOff16: ImageVector
  get() {
    if (_megaphoneOff16 != null) {
      return _megaphoneOff16!!
    }
    _megaphoneOff16 = fluentIcon(name = "Filled.MegaphoneOff16", 16f) {
      materialPath {
          moveTo(13.294F, 14.001F)
          lineToRelative(0.852F, 0.853F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(3.169F, 3.168F)
          lineTo(2.02F, 5.797F)
          curveTo(1.41F, 6.003F, 1.0F, 6.574F, 1.0F, 7.217F)
          verticalLineToRelative(1.566F)
          curveToRelative(0.0F, 0.643F, 0.41F, 1.214F, 1.018F, 1.42F)
          lineTo(4.0F, 10.877F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          curveToRelative(1.355F, 0.0F, 2.5F, -0.898F, 2.873F, -2.132F)
          lineToRelative(3.145F, 1.067F)
          curveToRelative(0.092F, 0.031F, 0.184F, 0.053F, 0.276F, 0.066F)
          close()
          moveTo(5.0F, 11.215F)
          lineToRelative(3.924F, 1.332F)
          curveTo(8.687F, 13.384F, 7.915F, 14.0F, 7.0F, 14.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.896F, -2.0F, -2.0F)
          verticalLineToRelative(-0.785F)
          close()
          moveToRelative(10.0F, 1.3F)
          curveToRelative(0.0F, 0.113F, -0.012F, 0.223F, -0.036F, 0.328F)
          lineTo(6.43F, 4.308F)
          lineToRelative(6.591F, -2.226F)
          curveTo(13.992F, 1.754F, 15.0F, 2.477F, 15.0F, 3.503F)
          verticalLineToRelative(9.012F)
          close()        
      }
    }
    return _megaphoneOff16!!
  }

private var _megaphoneOff16: ImageVector? = null
