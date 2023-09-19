package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cloud20: ImageVector
  get() {
    if (_cloud20 != null) {
      return _cloud20!!
    }
    _cloud20 = fluentIcon(name = "Filled.Cloud20", 20f) {
      materialPath {
          moveTo(10.0F, 4.0F)
          curveToRelative(2.817F, 0.0F, 4.415F, 1.923F, 4.647F, 4.246F)
          horizontalLineToRelative(0.07F)
          curveToRelative(1.814F, 0.0F, 3.283F, 1.512F, 3.283F, 3.377F)
          curveTo(18.0F, 13.488F, 16.53F, 15.0F, 14.718F, 15.0F)
          horizontalLineTo(5.282F)
          curveTo(3.47F, 15.0F, 2.0F, 13.488F, 2.0F, 11.623F)
          curveToRelative(0.0F, -1.865F, 1.47F, -3.377F, 3.282F, -3.377F)
          horizontalLineToRelative(0.071F)
          curveTo(5.587F, 5.908F, 7.183F, 4.0F, 10.0F, 4.0F)
          close()        
      }
    }
    return _cloud20!!
  }

private var _cloud20: ImageVector? = null
