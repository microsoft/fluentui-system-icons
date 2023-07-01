package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SyncOff16: ImageVector
  get() {
    if (_syncOff16 != null) {
      return _syncOff16!!
    }
    _syncOff16 = fluentIcon(name = "Regular.SyncOff16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          curveToRelative(0.0F, -0.34F, 0.028F, -0.675F, 0.083F, -1.0F)
          curveTo(2.559F, 4.162F, 5.027F, 2.0F, 8.0F, 2.0F)
          reflectiveCurveToRelative(5.441F, 2.162F, 5.917F, 5.0F)
          lineToRelative(0.002F, 0.012F)
          curveTo(13.972F, 7.333F, 14.0F, 7.663F, 14.0F, 8.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          horizontalLineTo(9.941F)
          lineTo(8.97F, 10.67F)
          curveToRelative(-0.094F, 0.26F, -0.381F, 0.394F, -0.64F, 0.3F)
          curveToRelative(-0.26F, -0.095F, -0.394F, -0.381F, -0.3F, -0.64F)
          lineToRelative(2.0F, -5.5F)
          curveToRelative(0.095F, -0.26F, 0.382F, -0.394F, 0.641F, -0.3F)
          curveToRelative(0.26F, 0.095F, 0.393F, 0.381F, 0.299F, 0.64F)
          lineTo(10.305F, 7.0F)
          horizontalLineTo(12.9F)
          curveTo(12.437F, 4.718F, 10.419F, 3.0F, 8.0F, 3.0F)
          curveTo(5.581F, 3.0F, 3.563F, 4.718F, 3.1F, 7.0F)
          horizontalLineToRelative(3.14F)
          lineToRelative(0.79F, -2.17F)
          curveToRelative(0.095F, -0.26F, 0.381F, -0.394F, 0.641F, -0.3F)
          curveToRelative(0.26F, 0.095F, 0.393F, 0.381F, 0.299F, 0.64F)
          lineToRelative(-2.0F, 5.5F)
          curveToRelative(-0.094F, 0.26F, -0.381F, 0.394F, -0.64F, 0.3F)
          curveToRelative(-0.26F, -0.095F, -0.394F, -0.381F, -0.3F, -0.64F)
          lineTo(5.877F, 8.0F)
          horizontalLineTo(3.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          close()        
      }
    }
    return _syncOff16!!
  }

private var _syncOff16: ImageVector? = null
