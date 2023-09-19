package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FolderMultiple16: ImageVector
  get() {
    if (_folderMultiple16 != null) {
      return _folderMultiple16!!
    }
    _folderMultiple16 = fluentIcon(name = "Filled.FolderMultiple16", 16f) {
      materialPath {
          moveTo(6.175F, 3.0F)
          horizontalLineToRelative(0.032F)
          lineToRelative(-1.65F, 1.5F)
          horizontalLineTo(1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.113F, 0.0F, 0.223F, 0.039F, 0.312F, 0.11F)
          lineTo(6.175F, 3.0F)
          close()
          moveToRelative(1.518F, 0.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.124F, 0.0F, 0.244F, -0.047F, 0.336F, -0.13F)
          lineTo(7.693F, 3.0F)
          close()
          moveTo(14.0F, 10.0F)
          verticalLineTo(5.27F)
          curveToRelative(0.6F, 0.35F, 1.0F, 0.99F, 1.0F, 1.73F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.74F, 0.0F, -1.38F, -0.4F, -1.73F, -1.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.65F, 0.0F, 3.0F, -1.35F, 3.0F, -3.0F)
          close()        
      }
    }
    return _folderMultiple16!!
  }

private var _folderMultiple16: ImageVector? = null
