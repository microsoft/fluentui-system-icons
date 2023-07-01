package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoOff48: ImageVector
  get() {
    if (_videoOff48 != null) {
      return _videoOff48!!
    }
    _videoOff48 = fluentIcon(name = "Filled.VideoOff48", 48f) {
      materialPath {
          moveTo(31.0F, 32.768F)
          lineToRelative(10.866F, 10.866F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(3.386F, 3.385F)
          curveTo(5.543F, 10.483F, 4.0F, 12.687F, 4.0F, 15.25F)
          verticalLineToRelative(17.5F)
          curveTo(4.0F, 36.202F, 6.798F, 39.0F, 10.25F, 39.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(3.446F, 0.0F, 6.24F, -2.789F, 6.25F, -6.232F)
          close()
          moveToRelative(2.0F, -5.07F)
          lineToRelative(7.66F, 7.66F)
          curveToRelative(1.547F, 0.56F, 3.34F, -0.559F, 3.34F, -2.36F)
          verticalLineTo(15.003F)
          curveToRelative(0.0F, -2.083F, -2.397F, -3.252F, -4.039F, -1.97F)
          lineTo(33.0F, 18.468F)
          verticalLineToRelative(9.228F)
          close()
          moveTo(14.303F, 9.0F)
          lineTo(31.0F, 25.697F)
          verticalLineTo(15.25F)
          curveTo(31.0F, 11.798F, 28.202F, 9.0F, 24.75F, 9.0F)
          horizontalLineTo(14.303F)
          close()        
      }
    }
    return _videoOff48!!
  }

private var _videoOff48: ImageVector? = null
