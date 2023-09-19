package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArchiveMultiple16: ImageVector
  get() {
    if (_archiveMultiple16 != null) {
      return _archiveMultiple16!!
    }
    _archiveMultiple16 = fluentIcon(name = "Filled.ArchiveMultiple16", 16f) {
      materialPath {
          moveTo(2.0F, 1.0F)
          curveTo(1.448F, 1.0F, 1.0F, 1.448F, 1.0F, 2.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(3.5F, 1.5F)
          curveTo(5.5F, 6.224F, 5.724F, 6.0F, 6.0F, 6.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(8.276F, 7.0F, 8.0F, 7.0F)
          horizontalLineTo(6.0F)
          curveTo(5.724F, 7.0F, 5.5F, 6.776F, 5.5F, 6.5F)
          close()
          moveTo(13.0F, 5.085F)
          curveToRelative(0.583F, 0.206F, 1.0F, 0.762F, 1.0F, 1.415F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.085F)
          close()        
      }
    }
    return _archiveMultiple16!!
  }

private var _archiveMultiple16: ImageVector? = null
