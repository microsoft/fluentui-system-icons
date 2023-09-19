package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SyncOff16: ImageVector
  get() {
    if (_syncOff16 != null) {
      return _syncOff16!!
    }
    _syncOff16 = fluentIcon(name = "Filled.SyncOff16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          horizontalLineToRelative(3.877F)
          lineTo(5.03F, 10.33F)
          curveToRelative(-0.094F, 0.259F, 0.04F, 0.546F, 0.3F, 0.64F)
          curveToRelative(0.259F, 0.094F, 0.546F, -0.04F, 0.64F, -0.3F)
          lineToRelative(2.0F, -5.5F)
          curveToRelative(0.094F, -0.259F, -0.04F, -0.545F, -0.299F, -0.64F)
          curveToRelative(-0.26F, -0.094F, -0.546F, 0.04F, -0.64F, 0.3F)
          lineTo(6.24F, 7.0F)
          horizontalLineTo(2.083F)
          curveTo(2.559F, 4.162F, 5.027F, 2.0F, 8.0F, 2.0F)
          reflectiveCurveToRelative(5.441F, 2.162F, 5.917F, 5.0F)
          horizontalLineToRelative(-3.612F)
          lineToRelative(0.665F, -1.83F)
          curveToRelative(0.094F, -0.259F, -0.04F, -0.545F, -0.299F, -0.64F)
          curveToRelative(-0.26F, -0.094F, -0.546F, 0.04F, -0.64F, 0.3F)
          lineToRelative(-2.0F, 5.5F)
          curveToRelative(-0.095F, 0.259F, 0.039F, 0.546F, 0.298F, 0.64F)
          curveToRelative(0.26F, 0.094F, 0.547F, -0.04F, 0.641F, -0.3F)
          lineTo(9.941F, 8.0F)
          horizontalLineTo(14.0F)
          close()        
      }
    }
    return _syncOff16!!
  }

private var _syncOff16: ImageVector? = null
