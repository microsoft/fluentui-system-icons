package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDownUp16: ImageVector
  get() {
    if (_chevronDownUp16 != null) {
      return _chevronDownUp16!!
    }
    _chevronDownUp16 = fluentIcon(name = "Regular.ChevronDownUp16", 16f) {
      materialPath {
          moveTo(11.854F, 3.353F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 5.793F)
          lineToRelative(3.146F, -3.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          close()
          moveToRelative(0.0F, 9.293F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 10.207F)
          lineToRelative(3.146F, 3.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _chevronDownUp16!!
  }

private var _chevronDownUp16: ImageVector? = null
