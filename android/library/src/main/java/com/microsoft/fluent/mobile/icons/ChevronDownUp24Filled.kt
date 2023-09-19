package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDownUp24: ImageVector
  get() {
    if (_chevronDownUp24 != null) {
      return _chevronDownUp24!!
    }
    _chevronDownUp24 = fluentIcon(name = "Filled.ChevronDownUp24", 24f) {
      materialPath {
          moveTo(6.707F, 2.793F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(6.0F, 6.0F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(6.0F, -6.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(12.0F, 8.086F)
          lineTo(6.707F, 2.793F)
          close()
          moveToRelative(0.0F, 18.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(6.0F, -6.0F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineToRelative(6.0F, 6.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(12.0F, 15.914F)
          lineToRelative(-5.293F, 5.293F)
          close()        
      }
    }
    return _chevronDownUp24!!
  }

private var _chevronDownUp24: ImageVector? = null
