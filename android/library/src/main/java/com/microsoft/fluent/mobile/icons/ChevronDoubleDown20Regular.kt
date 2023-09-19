package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleDown20: ImageVector
  get() {
    if (_chevronDoubleDown20 != null) {
      return _chevronDoubleDown20!!
    }
    _chevronDoubleDown20 = fluentIcon(name = "Regular.ChevronDoubleDown20", 20f) {
      materialPath {
          moveTo(15.854F, 8.646F)
          curveToRelative(0.195F, 0.195F, 0.196F, 0.511F, 0.001F, 0.707F)
          lineToRelative(-5.465F, 5.484F)
          curveToRelative(-0.215F, 0.216F, -0.564F, 0.216F, -0.78F, 0.0F)
          lineTo(4.147F, 9.353F)
          curveToRelative(-0.197F, -0.196F, -0.197F, -0.513F, 0.0F, -0.707F)
          curveTo(4.343F, 8.45F, 4.66F, 8.45F, 4.854F, 8.647F)
          lineTo(10.0F, 13.812F)
          lineToRelative(5.147F, -5.165F)
          curveToRelative(0.194F, -0.196F, 0.511F, -0.196F, 0.707F, -0.001F)
          close()
          moveToRelative(0.0F, -4.0F)
          curveToRelative(0.195F, 0.195F, 0.196F, 0.511F, 0.001F, 0.707F)
          lineToRelative(-5.465F, 5.484F)
          curveToRelative(-0.215F, 0.216F, -0.564F, 0.216F, -0.78F, 0.0F)
          lineTo(4.147F, 5.353F)
          curveToRelative(-0.197F, -0.196F, -0.197F, -0.513F, 0.0F, -0.707F)
          curveTo(4.343F, 4.45F, 4.66F, 4.452F, 4.854F, 4.647F)
          lineTo(10.0F, 9.812F)
          lineToRelative(5.147F, -5.165F)
          curveToRelative(0.194F, -0.196F, 0.511F, -0.196F, 0.707F, -0.001F)
          close()        
      }
    }
    return _chevronDoubleDown20!!
  }

private var _chevronDoubleDown20: ImageVector? = null
