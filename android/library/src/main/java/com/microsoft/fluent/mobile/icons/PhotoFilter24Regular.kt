package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PhotoFilter24: ImageVector
  get() {
    if (_photoFilter24 != null) {
      return _photoFilter24!!
    }
    _photoFilter24 = fluentIcon(name = "Regular.PhotoFilter24", 24f) {
      materialPath {
          moveTo(9.5F, 2.0F)
          curveToRelative(3.384F, 0.0F, 6.245F, 2.242F, 7.179F, 5.321F)
          curveTo(19.759F, 8.255F, 22.0F, 11.116F, 22.0F, 14.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-3.384F, 0.0F, -6.245F, -2.242F, -7.179F, -5.321F)
          curveTo(4.241F, 15.745F, 2.0F, 12.884F, 2.0F, 9.5F)
          curveTo(2.0F, 5.358F, 5.358F, 2.0F, 9.5F, 2.0F)
          close()
          moveToRelative(7.486F, 7.037F)
          lineToRelative(0.01F, 0.22F)
          lineTo(17.0F, 9.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-0.155F, 0.0F, -0.309F, -0.005F, -0.462F, -0.014F)
          curveToRelative(0.944F, 2.073F, 3.035F, 3.514F, 5.462F, 3.514F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          curveToRelative(0.0F, -2.427F, -1.441F, -4.518F, -3.514F, -5.463F)
          close()
          moveTo(9.5F, 3.5F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.686F, -6.0F, 6.0F)
          curveToRelative(0.0F, 2.427F, 1.441F, 4.518F, 3.514F, 5.463F)
          lineToRelative(-0.01F, -0.22F)
          lineTo(7.0F, 14.5F)
          curveTo(7.0F, 10.358F, 10.358F, 7.0F, 14.5F, 7.0F)
          curveToRelative(0.155F, 0.0F, 0.309F, 0.005F, 0.462F, 0.014F)
          curveTo(14.018F, 4.941F, 11.927F, 3.5F, 9.5F, 3.5F)
          close()        
      }
    }
    return _photoFilter24!!
  }

private var _photoFilter24: ImageVector? = null
