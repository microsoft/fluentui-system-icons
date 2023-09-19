package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronUpDown24: ImageVector
  get() {
    if (_chevronUpDown24 != null) {
      return _chevronUpDown24!!
    }
    _chevronUpDown24 = fluentIcon(name = "Filled.ChevronUpDown24", 24f) {
      materialPath {
          moveTo(18.79F, 8.387F)
          curveToRelative(0.305F, 0.392F, 0.278F, 0.96F, -0.083F, 1.32F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(12.0F, 4.414F)
          lineTo(6.707F, 9.707F)
          lineTo(6.613F, 9.79F)
          curveToRelative(-0.392F, 0.305F, -0.96F, 0.278F, -1.32F, -0.083F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(6.0F, -6.0F)
          lineToRelative(0.094F, -0.083F)
          curveToRelative(0.392F, -0.305F, 0.96F, -0.278F, 1.32F, 0.083F)
          lineToRelative(6.0F, 6.0F)
          lineToRelative(0.083F, 0.094F)
          close()
          moveTo(5.21F, 15.613F)
          curveToRelative(-0.305F, -0.392F, -0.278F, -0.96F, 0.083F, -1.32F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(12.0F, 19.586F)
          lineToRelative(5.293F, -5.293F)
          lineToRelative(0.094F, -0.083F)
          curveToRelative(0.392F, -0.305F, 0.96F, -0.278F, 1.32F, 0.083F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-6.0F, 6.0F)
          lineToRelative(-0.094F, 0.083F)
          curveToRelative(-0.392F, 0.305F, -0.96F, 0.278F, -1.32F, -0.083F)
          lineToRelative(-6.0F, -6.0F)
          lineToRelative(-0.083F, -0.094F)
          close()        
      }
    }
    return _chevronUpDown24!!
  }

private var _chevronUpDown24: ImageVector? = null
