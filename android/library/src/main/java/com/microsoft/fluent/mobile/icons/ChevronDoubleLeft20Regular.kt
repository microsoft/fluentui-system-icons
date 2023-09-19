package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleLeft20: ImageVector
  get() {
    if (_chevronDoubleLeft20 != null) {
      return _chevronDoubleLeft20!!
    }
    _chevronDoubleLeft20 = fluentIcon(name = "Regular.ChevronDoubleLeft20", 20f) {
      materialPath {
          moveTo(11.353F, 15.854F)
          curveToRelative(-0.194F, 0.195F, -0.511F, 0.196F, -0.707F, 0.001F)
          lineTo(5.162F, 10.39F)
          curveToRelative(-0.216F, -0.215F, -0.216F, -0.564F, 0.0F, -0.78F)
          lineToRelative(5.484F, -5.464F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.001F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(6.187F, 10.0F)
          lineToRelative(5.164F, 5.147F)
          curveToRelative(0.196F, 0.194F, 0.196F, 0.511F, 0.001F, 0.707F)
          close()
          moveToRelative(4.0F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.196F, -0.708F, 0.001F)
          lineTo(9.161F, 10.39F)
          curveToRelative(-0.216F, -0.215F, -0.216F, -0.564F, 0.0F, -0.78F)
          lineToRelative(5.484F, -5.464F)
          curveToRelative(0.196F, -0.195F, 0.513F, -0.195F, 0.707F, 0.001F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(10.186F, 10.0F)
          lineToRelative(5.164F, 5.147F)
          curveToRelative(0.196F, 0.194F, 0.196F, 0.511F, 0.001F, 0.707F)
          close()        
      }
    }
    return _chevronDoubleLeft20!!
  }

private var _chevronDoubleLeft20: ImageVector? = null
