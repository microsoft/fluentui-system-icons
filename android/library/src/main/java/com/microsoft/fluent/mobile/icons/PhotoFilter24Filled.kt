package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhotoFilter24: ImageVector
  get() {
    if (_photoFilter24 != null) {
      return _photoFilter24!!
    }
    _photoFilter24 = fluentIcon(name = "Filled.PhotoFilter24", 24f) {
      materialPath {
          moveTo(9.5F, 2.0F)
          curveToRelative(3.384F, 0.0F, 6.245F, 2.242F, 7.179F, 5.321F)
          curveTo(19.759F, 8.255F, 22.0F, 11.116F, 22.0F, 14.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-3.384F, 0.0F, -6.245F, -2.242F, -7.179F, -5.321F)
          curveTo(4.241F, 15.745F, 2.0F, 12.884F, 2.0F, 9.5F)
          curveTo(2.0F, 5.358F, 5.358F, 2.0F, 9.5F, 2.0F)
          close()
          moveToRelative(7.498F, 7.599F)
          lineTo(17.0F, 9.5F)
          curveToRelative(0.0F, 4.109F, -3.304F, 7.446F, -7.4F, 7.5F)
          curveToRelative(0.909F, 1.78F, 2.762F, 3.0F, 4.9F, 3.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, -2.462F, 5.5F, -5.5F)
          curveToRelative(0.0F, -2.138F, -1.22F, -3.991F, -3.002F, -4.901F)
          close()
          moveTo(9.5F, 4.0F)
          curveTo(6.462F, 4.0F, 4.0F, 6.462F, 4.0F, 9.5F)
          curveToRelative(0.0F, 2.138F, 1.22F, 3.991F, 3.002F, 4.901F)
          lineTo(7.0F, 14.5F)
          curveToRelative(0.0F, -4.109F, 3.304F, -7.446F, 7.4F, -7.5F)
          curveToRelative(-0.909F, -1.78F, -2.762F, -3.0F, -4.9F, -3.0F)
          close()        
      }
    }
    return _photoFilter24!!
  }

private var _photoFilter24: ImageVector? = null
