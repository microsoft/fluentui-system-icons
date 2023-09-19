package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDownUp20: ImageVector
  get() {
    if (_chevronDownUp20 != null) {
      return _chevronDownUp20!!
    }
    _chevronDownUp20 = fluentIcon(name = "Regular.ChevronDownUp20", 20f) {
      materialPath {
          moveTo(5.854F, 3.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(10.0F, 7.293F)
          lineTo(5.854F, 3.146F)
          close()
          moveToRelative(9.0F, 13.0F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(10.0F, 12.707F)
          lineToRelative(4.146F, 4.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _chevronDownUp20!!
  }

private var _chevronDownUp20: ImageVector? = null
