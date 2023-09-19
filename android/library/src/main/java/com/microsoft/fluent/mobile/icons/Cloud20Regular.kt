package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Cloud20: ImageVector
  get() {
    if (_cloud20 != null) {
      return _cloud20!!
    }
    _cloud20 = fluentIcon(name = "Regular.Cloud20", 20f) {
      materialPath {
          moveTo(10.0F, 4.0F)
          curveToRelative(2.817F, 0.0F, 4.415F, 1.923F, 4.647F, 4.246F)
          horizontalLineToRelative(0.07F)
          curveToRelative(1.814F, 0.0F, 3.283F, 1.512F, 3.283F, 3.377F)
          curveTo(18.0F, 13.488F, 16.53F, 15.0F, 14.718F, 15.0F)
          horizontalLineTo(5.282F)
          curveTo(3.47F, 15.0F, 2.0F, 13.488F, 2.0F, 11.623F)
          curveTo(2.0F, 9.82F, 3.373F, 8.347F, 5.102F, 8.251F)
          lineToRelative(0.251F, -0.005F)
          curveTo(5.587F, 5.908F, 7.183F, 4.0F, 10.0F, 4.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(7.886F, 5.0F, 6.551F, 6.316F, 6.348F, 8.345F)
          curveToRelative(-0.05F, 0.512F, -0.481F, 0.901F, -0.995F, 0.901F)
          horizontalLineToRelative(-0.07F)
          curveTo(4.027F, 9.246F, 3.0F, 10.304F, 3.0F, 11.623F)
          curveTo(3.0F, 12.943F, 4.028F, 14.0F, 5.282F, 14.0F)
          horizontalLineToRelative(9.436F)
          curveTo(15.972F, 14.0F, 17.0F, 12.942F, 17.0F, 11.623F)
          curveToRelative(0.0F, -1.32F, -1.028F, -2.377F, -2.282F, -2.377F)
          horizontalLineToRelative(-0.071F)
          curveToRelative(-0.514F, 0.0F, -0.944F, -0.39F, -0.995F, -0.9F)
          curveTo(13.45F, 6.324F, 12.109F, 5.0F, 10.0F, 5.0F)
          close()        
      }
    }
    return _cloud20!!
  }

private var _cloud20: ImageVector? = null
