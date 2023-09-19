package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronUp48: ImageVector
  get() {
    if (_chevronUp48 != null) {
      return _chevronUp48!!
    }
    _chevronUp48 = fluentIcon(name = "Filled.ChevronUp48", 48f) {
      materialPath {
          moveTo(39.56F, 32.06F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          lineTo(24.0F, 18.622F)
          lineToRelative(-13.44F, 13.44F)
          curveToRelative(-0.585F, 0.585F, -1.535F, 0.585F, -2.12F, 0.0F)
          curveToRelative(-0.586F, -0.586F, -0.586F, -1.536F, 0.0F, -2.122F)
          lineToRelative(14.5F, -14.5F)
          curveToRelative(0.585F, -0.585F, 1.535F, -0.585F, 2.12F, 0.0F)
          lineToRelative(14.5F, 14.5F)
          curveToRelative(0.586F, 0.586F, 0.586F, 1.536F, 0.0F, 2.122F)
          close()        
      }
    }
    return _chevronUp48!!
  }

private var _chevronUp48: ImageVector? = null
